"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { ethers } from "ethers"

// Import the contract ABI
const UserRegistryArtifact = {
  "_format": "hh-sol-artifact-1",
  "contractName": "UserRegistry",
  "sourceName": "contracts/UserRegistry.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_username",
          "type": "string"
        }
      ],
      "name": "registerUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "isUserRegistered",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
};

const CONTRACT_ADDRESS = '0x7020fD02FC26D96F34C45364257487e574247FfE';
const PHAROS_CHAIN_ID = '0xC352'; // 50002 in hex

interface Web3ContextType {
  address: string;
  isConnected: boolean;
  isRegistered: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  registerUser: (username: string) => Promise<void>;
  username: string;
  setUsername: (username: string) => void;
  showUsernameInput: boolean;
  setShowUsernameInput: (show: boolean) => void;
}

const Web3Context = createContext<Web3ContextType>({
  address: '',
  isConnected: false,
  isRegistered: false,
  connect: async () => {},
  disconnect: () => {},
  registerUser: async () => {},
  username: '',
  setUsername: () => {},
  showUsernameInput: false,
  setShowUsernameInput: () => {},
});

export const useWeb3 = () => useContext(Web3Context);

interface Web3ProviderProps {
  children: ReactNode;
}

export function Web3Provider({ children }: Web3ProviderProps) {
  const [account, setAccount] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState('');
  const [showUsernameInput, setShowUsernameInput] = useState(false);

  const checkRegistration = async (address: string) => {
    if (!window.ethereum) return;
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, UserRegistryArtifact.abi, provider);
      const result = await contract.isUserRegistered(address);
      setIsRegistered(result);
    } catch (error) {
      console.error('Error checking registration:', error);
    }
  };

  const connect = async () => {
    // Check specifically for MetaMask
    if (typeof window.ethereum === 'undefined' || !window.ethereum.isMetaMask) {
      alert('Please install MetaMask!');
      return;
    }

    try {
      // Request account access specifically from MetaMask
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts',
        params: [{ eth_accounts: {} }]
      });
      setAccount(accounts[0]);

      // Check and switch to Pharos network if needed
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      if (chainId !== PHAROS_CHAIN_ID) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: PHAROS_CHAIN_ID }],
          });
        } catch (switchError: any) {
          // This error code indicates that the chain has not been added to MetaMask
          if (switchError.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: PHAROS_CHAIN_ID,
                  chainName: 'Pharos Devnet',
                  nativeCurrency: {
                    name: 'ETH',
                    symbol: 'ETH',
                    decimals: 18,
                  },
                  rpcUrls: ['https://devnet.dplabs-internal.com'],
                },
              ],
            });
          }
        }
      }

      await checkRegistration(accounts[0]);
      if (!isRegistered) {
        setShowUsernameInput(true);
      }
    } catch (error) {
      console.error('Error connecting to MetaMask', error);
    }
  };

  const disconnect = () => {
    setAccount('');
    setIsRegistered(false);
    setUsername('');
    setShowUsernameInput(false);
  };

  const registerUser = async (username: string) => {
    if (!window.ethereum || !account) return;
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, UserRegistryArtifact.abi, signer);
      
      const tx = await contract.registerUser(username);
      await tx.wait();
      
      await checkRegistration(account);
      setShowUsernameInput(false);
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      // Handle account changes
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          checkRegistration(accounts[0]);
        } else {
          disconnect();
        }
      });

      // Handle chain changes
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', () => {});
        window.ethereum.removeListener('chainChanged', () => {});
      }
    };
  }, []);

  return (
    <Web3Context.Provider
      value={{
        address: account,
        isConnected: !!account,
        isRegistered,
        connect,
        disconnect,
        registerUser,
        username,
        setUsername,
        showUsernameInput,
        setShowUsernameInput,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
} 
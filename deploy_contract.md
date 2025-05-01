# Deploying Smart Contracts to Pharos Network

## Prerequisites

1. **Node.js & Bun Installed**
   - Install [Node.js](https://nodejs.org/) (v18+ recommended)
   - Install [Bun](https://bun.sh/)

2. **MetaMask Wallet**
   - Install MetaMask browser extension
   - Create or import a wallet
   - Fund your wallet with test ETH for Pharos Devnet (if needed)

3. **Pharos Network Details**
   - RPC URL: `https://devnet.dplabs-internal.com`
   - Chain ID: `50002`

4. **Project Setup**
   - Clone your project repository
   - Install dependencies:
     ```sh
     bun install
     ```

5. **.env File**
   - Create a `.env` file in the project root with:
     ```env
     PHAROS_RPC_URL=https://devnet.dplabs-internal.com
     PHAROS_CHAIN_ID=50002
     PRIVATE_KEY=your_private_key_here
     ```
   - **Never share or commit your private key!**

---

## Steps to Deploy

1. **Compile the Contract**
   ```sh
   bunx hardhat compile
   ```

2. **Deploy the Contract**
   ```sh
   bunx hardhat run scripts/deploy.ts --network pharos
   ```
   - The output will show the deployed contract address (save this for your frontend).

3. **Update Frontend**
   - Replace the contract address in your frontend code (e.g., `WalletTest.tsx`, `web3-provider.tsx`) with the new address.

4. **(Optional) Verify the Contract**
   - If Pharos supports contract verification, follow their explorer instructions.

---

## Troubleshooting

- **Node.js Version Warning:**
  - If you see a warning about Node.js version, use Node.js v18 or v20 for best compatibility.

- **MetaMask Not Connecting:**
  - Make sure MetaMask is unlocked and on the Pharos Devnet.
  - Check for errors in the browser console.

- **Private Key Security:**
  - Only use test accounts for development.
  - Never expose your private key in frontend code or public repos.

---

## Useful Links
- [MetaMask Download](https://metamask.io/)
- [Bun](https://bun.sh/)
- [Hardhat](https://hardhat.org/)
- [Pharos Network](https://pharos.network/) 
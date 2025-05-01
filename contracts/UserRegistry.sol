// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract UserRegistry {
    struct User {
        address walletAddress;
        string username;
        bool isVerified;
        uint256 createdAt;
        uint256 lastActive;
    }

    mapping(address => User) public users;
    mapping(string => address) public usernameToAddress;
    address[] public userAddresses;

    // Add a mapping to store messages
    mapping(address => string) public userMessages;
    
    // Add an event for message updates
    event MessageUpdated(address indexed user, string message);

    event UserRegistered(address indexed userAddress, string username);
    event UserUpdated(address indexed userAddress, string username);
    event UserVerified(address indexed userAddress);

    modifier onlyRegisteredUser() {
        require(users[msg.sender].walletAddress != address(0), "User not registered");
        _;
    }

    function registerUser(string memory _username) public {
        require(users[msg.sender].walletAddress == address(0), "User already registered");
        require(usernameToAddress[_username] == address(0), "Username already taken");
        require(bytes(_username).length >= 3, "Username too short");
        require(bytes(_username).length <= 32, "Username too long");

        User memory newUser = User({
            walletAddress: msg.sender,
            username: _username,
            isVerified: false,
            createdAt: block.timestamp,
            lastActive: block.timestamp
        });

        users[msg.sender] = newUser;
        usernameToAddress[_username] = msg.sender;
        userAddresses.push(msg.sender);

        emit UserRegistered(msg.sender, _username);
    }

    function updateUser(string memory _username) public onlyRegisteredUser {
        require(usernameToAddress[_username] == address(0) || usernameToAddress[_username] == msg.sender, "Username already taken");
        require(bytes(_username).length >= 3, "Username too short");
        require(bytes(_username).length <= 32, "Username too long");

        // Clear old username mapping
        usernameToAddress[users[msg.sender].username] = address(0);

        // Update user
        users[msg.sender].username = _username;
        users[msg.sender].lastActive = block.timestamp;
        usernameToAddress[_username] = msg.sender;

        emit UserUpdated(msg.sender, _username);
    }

    function verifyUser(address _userAddress) public {
        // In a real implementation, this would be restricted to authorized verifiers
        require(users[_userAddress].walletAddress != address(0), "User not registered");
        users[_userAddress].isVerified = true;
        emit UserVerified(_userAddress);
    }

    function getUser(address _userAddress) public view returns (User memory) {
        return users[_userAddress];
    }

    function getUserByUsername(string memory _username) public view returns (User memory) {
        address userAddress = usernameToAddress[_username];
        require(userAddress != address(0), "User not found");
        return users[userAddress];
    }

    function isUserRegistered(address _userAddress) public view returns (bool) {
        return users[_userAddress].walletAddress != address(0);
    }

    function getTotalUsers() public view returns (uint256) {
        return userAddresses.length;
    }

    // Add new function to store a message
    function storeMessage(string memory _message) public onlyRegisteredUser {
        userMessages[msg.sender] = _message;
        emit MessageUpdated(msg.sender, _message);
    }

    // Add function to get a user's message
    function getMessage(address _userAddress) public view returns (string memory) {
        return userMessages[_userAddress];
    }
} 
# **CTF Challenge: Stolen Masterpiece - The Lost Mona Lisa**

### **Level**: Medium  
### **Score**: 300 Points  
### **Flag**: FLAG-{signed_message}  

---

## **Question**:
The famous "Lost Mona Lisa" artwork is secured using blockchain technology. Your task is to claim ownership of this masterpiece by interacting with a Solidity smart contract deployed on the Sepolia network. The flag will be retrieved after successful interaction with the smart contract.

However, ownership can only be claimed if you decipher the encrypted message provided in `cipher.txt`. Use your blockchain knowledge to interact with the smart contract and retrieve the flag upon contract interaction.

---

## **Concepts of Blockchain Used**:
1. **Immutability**: The contract's state ensures the ownership transfer is secure and cannot be tampered with.
2. **Decentralization**: The contract is deployed on the Sepolia Ethereum testnet, making it publicly accessible.
3. **Cryptographic Security**: The `claimOwnership` function requires a valid signed message, ensuring only the rightful owner can transfer ownership.


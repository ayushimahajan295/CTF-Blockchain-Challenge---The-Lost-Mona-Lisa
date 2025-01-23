require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/YYg77ADkh02YhkG4nsQWNqi8nIRQvA5q", 
      accounts: [process.env.PRIVATE_KEY], //your private key in place of PRIVATE_KEY to claim ownership
    },
  },
};
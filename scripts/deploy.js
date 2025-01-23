const hre = require("hardhat");

async function main() {
    // Get the contract factory
    const StolenMasterpiece = await hre.ethers.getContractFactory("StolenMasterpiece");

    // Deploy the contract
    const masterpiece = await StolenMasterpiece.deploy();

    // Wait for the contract to be deployed
    await masterpiece.deployed();

    // Log the deployed contract address
    console.log("Contract deployed to:", masterpiece.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
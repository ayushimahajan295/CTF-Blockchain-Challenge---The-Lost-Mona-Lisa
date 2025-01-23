const hre = require("hardhat");

async function main() {
    // Replace with your deployed contract address
    const contractAddress = "0x83048234c28b2da3fa6eaB6F671230c8D4ecE525";

    // Get the contract factory
    const StolenMasterpiece = await hre.ethers.getContractFactory("StolenMasterpiece");

    // Attach to the deployed contract
    const masterpiece = await StolenMasterpiece.attach(contractAddress);

    // Log the current owner of the artwork
    const owner = await masterpiece.owner();
    console.log("Current owner of the artwork:", owner);

    // Example: Claim ownership (only works if you have the correct signed message)
    const signedMessage = ""; 
    const tx = await masterpiece.claimOwnership(signedMessage);
    const receipt = await tx.wait();

    console.log("Ownership claimed! New owner:", await masterpiece.owner());

    // Extract and log the flag from the emitted event
    const event = receipt.events.find(event => event.event === "OwnershipClaimed");
    if (event) {
        console.log("Flag:", event.args.flag);
    } else {
        console.log("OwnershipClaimed event not found. Ensure the message is correct.");
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

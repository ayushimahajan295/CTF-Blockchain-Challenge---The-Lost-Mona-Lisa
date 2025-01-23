// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StolenMasterpiece {
    string public artwork = "The Lost Mona Lisa";
    address public owner;
    string private constant flag = ""; 

    event OwnershipClaimed(address indexed newOwner, string flag);

    constructor() {
        owner = msg.sender;
    }

    function claimOwnership(string memory signedMessage) public {
        require(
            keccak256(abi.encodePacked(signedMessage)) == keccak256(abi.encodePacked("")), 
            "Invalid signature"
        );
        owner = msg.sender;

        emit OwnershipClaimed(msg.sender, flag);
    }
}

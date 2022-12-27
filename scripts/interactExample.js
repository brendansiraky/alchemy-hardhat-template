/*
    This file is just a basic example of how to interact with an already deployed contract.
*/

const { ethers } = require('hardhat')
const { abi } = require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json')
const { signer } = require('../config')
const { getEthBalance } = require('../helpers/getEthBalance')

const CONTRACT_ADDRESS = '0x4EE92526865462207133B1c35D7E10df116DC6a9'

async function interact() {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer)
    const message = await contract.message()
    const balance = await getEthBalance(CONTRACT_ADDRESS)
    console.log(
        `The message is ${message} and the balance in ether is ${balance}`
    )
}

interact()

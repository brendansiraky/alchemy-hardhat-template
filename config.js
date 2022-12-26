require('dotenv').config()
const { ethers } = require('hardhat')

const { API_URL, API_KEY, NETWORK, SOLIDITY_VERSION, PRIVATE_KEY } = process.env

const config = {
    API_URL,
    API_KEY,
    NETWORK,
    SOLIDITY_VERSION,
    PRIVATE_KEY,
}

const provider = new ethers.providers.AlchemyProvider(NETWORK, API_KEY)

const signer = new ethers.Wallet(PRIVATE_KEY, provider)

module.exports = {
    config,
    provider,
    signer,
    ethers,
}

require('dotenv').config()
const { ethers } = require('hardhat')
const CHAIN_IDS = require('./constants/CHAIN_IDS')

const {
    MAINNET_API_URL,
    MAINNET_API_KEY,

    GOERLI_API_URL,
    GOERLI_API_KEY,

    NETWORK,
    SOLIDITY_VERSION,
    PRIVATE_KEY,
} = process.env

const API_KEY = NETWORK === 'mainnet' ? MAINNET_API_KEY : GOERLI_API_KEY

const config = {
    API_URL: NETWORK === 'mainnet' ? MAINNET_API_URL : GOERLI_API_URL,
    API_KEY,
    NETWORK,
    CHAIN_ID: CHAIN_IDS[NETWORK],
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

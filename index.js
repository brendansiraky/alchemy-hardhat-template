// Setup: npm install alchemy-sdk
const { Network, Alchemy } = require("alchemy-sdk");
const contractAbi = require('./contract_abi.json');
const ethers = require("@nomiclabs/hardhat-ethers");

const { CONTRACT_ADDRESS, PRIVATE_KEY, API_KEY } = process.env;

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
    apiKey: "RYs95_mbUmUFgLIwUPk4AERG-wV_zq4W",
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

async function main() {
    const latestBlock = await alchemy.core.getBlockNumber();
    console.log("The latest block number is", latestBlock);
}

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider("goerli", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const flashloanContract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, signer);


async function interact() {
    const balance = await flashloanContract.getBalance('0xA2025B15a1757311bfD68cb14eaeFCc237AF5b43')
    console.log("The balance is: " + balance);
}

interact()
// main();
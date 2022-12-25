// For Hardhat 
const contract = require("../artifacts/contracts/FlashLoan.sol/FlashLoan.json");

const CronJob = require('cron').CronJob;

var job = new CronJob(
	'* * * * * *',
	function() {
		console.log('You will see this message every second');
	},
	null,
	true,
	'America/Los_Angeles'
);

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = "0x27b1A2FfD2D89E2a17b1AA48B6Bb3124677F34A3"

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const flashLoanContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    flashLoanContract.requestFlashLoan("0xA2025B15a1757311bfD68cb14eaeFCc237AF5b43", 160000)
    // const balance = await flashLoanContract.getBalance("0xA2025B15a1757311bfD68cb14eaeFCc237AF5b43");
    // console.log("The balance is: " + balance);
}

main();
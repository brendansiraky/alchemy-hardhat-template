// For Hardhat
const { ethers } = require('hardhat')
const { abi } = require('../artifacts/contracts/FlashLoan.sol/FlashLoan.json')
const { signer, provider } = require('../config')
const getFormattedDate = require('../utils/getFormattedDate')
const log = require('../utils/log')

const CONTRACT_ADDRESS = '0xa0f97a29Cc412fB8025907A66834408Ef4aFbF13'
const USDC_ADDRESS = '0xA2025B15a1757311bfD68cb14eaeFCc237AF5b43'

async function interact() {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer)
    const result = await contract.requestFlashLoan(USDC_ADDRESS, 160000)

    // const date = getFormattedDate()
    // log(
    //     `deployments/${date}-${contractName}`,
    //     `${contractName} Contract was deployed with the address: ${deployedContract.address}`
    // )

    console.log(result)
}

async function getTransaction(hash) {
    try {
        const response = await provider.getTransaction(hash)
        console.log(response)

        const date = getFormattedDate()
        log(
            `interactions/${date}-FlashLoan`,
            JSON.stringify(response, null, 2),
            'json'
        )
    } catch (error) {
        console.error(error)
    }
}

getTransaction(
    '0x4fe203c300626301054d6d1aca0b7268584e7f33518cd73c19de4724a8bcb2d5'
)

// const CronJob = require('cron').CronJob

// var job = new CronJob(
//     '* * * * * *',
//     function () {
//         console.log('You will see this message every second')
//     },
//     null,
//     true,
//     'America/Los_Angeles'
// )
// interact()

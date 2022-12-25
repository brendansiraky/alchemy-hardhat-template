const log = require('../utils/log')
const getFormattedDate = require('../utils/getFormattedDate')
const { ethers } = require('hardhat')

async function deploy(params) {
    try {
        console.log('Attempting to grab deployment params')
        const { contractName, ...rest } = params

        console.log(`Calling the getContractFactory passing in the contract name: ${contractName}`)
        const Contract = await ethers.getContractFactory(contractName)

        console.log(`Attempting to deploy the contract with the params: ${JSON.stringify(params, null, 2)}`)
        const deployedContract = await Contract.deploy(rest)
        
        console.log(`Contract successfully deployed to address: ${deployedContract.address}`)
        const date = getFormattedDate()
        log(`${date}-${contractName}`, `Contract address is: ${deployedContract.address}`)

    } catch (error) {
        console.error(`Something failed when trying to deploy the contract with the error: ${error}`)
    }
}

module.exports = deploy
const log = require('../utils/log')
const getFormattedDate = require('../utils/getFormattedDate')
const { ethers } = require('hardhat')

async function deploy() {
    try {
        console.log('Attempting to grab deployment params')

        // Remove the first 2 as they are default arguments
        const args = process.argv.slice(2)

        // The first argument will be the contractName, followed by the parameters for the deployment.
        const [contractName, ...deploymentParams] = args

        console.log(
            `Calling the getContractFactory passing in the contract name: ${contractName}`
        )
        const Contract = await ethers.getContractFactory(contractName)

        console.log(
            `Attempting to deploy the contract named ${contractName} with the params: ${deploymentParams}`
        )
        const deployedContract = await Contract.deploy(...deploymentParams)

        console.log(
            `Contract successfully deployed to address: ${deployedContract.address}`
        )
        const date = getFormattedDate()
        log(
            `deployments/${date}-${contractName}`,
            `Contract address is: ${deployedContract.address}`
        )
    } catch (error) {
        console.error(
            `Something failed when trying to deploy the contract with the error: ${error}`
        )
    }
}

deploy()

module.exports = deploy

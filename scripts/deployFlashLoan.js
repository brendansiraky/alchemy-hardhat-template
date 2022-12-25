async function main() {
    const FlashLoan = await ethers.getContractFactory("FlashLoan");

    // Start deployment, returning a promise that resolves to a contract object
    const flashLoan = await FlashLoan.deploy("0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D");   
    console.log("Contract deployed to address:", flashLoan.address);
}
 
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exitå(1);
    });
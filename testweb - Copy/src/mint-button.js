const connectButton = document.querySelector('#connect-button');
const mintButton = document.querySelector('#mint-button');

// Replace "contract-address" with the actual address of your NFT contract
const contractAddress = "0x04ddb68778e1b1c89ac46bc6be9155db712c99f7422e85efc84a1ef58f95d0e8";
const contractAbi = [


];

let signer;

// Handle button click
connectButton.addEventListener('click', async () => {
    try {
        // Request access to the user's Argent wallet
        const wallet = new ArgentSdk();
        await wallet.enable();
        signer = wallet.getSigner();
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        mintButton.disabled = false;
        connectButton.style.display = 'none';
        console.log('Connected to wallet:', await signer.getAddress());
    } catch (error) {
        console.error(error);
        alert('Failed to connect to wallet. Please try again later.');
    }
});

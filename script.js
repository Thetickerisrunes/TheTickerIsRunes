async function checkWallet() {
    const walletInput = document.getElementById('walletInput').value;
    const response = await fetch('holders.json');
    const holders = await response.json();

    const result = holders.includes(walletInput)
        ? 'You are a verified holder!'
        : 'Wallet not found.';

    document.getElementById('result').textContent = result;
}

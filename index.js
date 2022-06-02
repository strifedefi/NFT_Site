// import detectEthereumProvider from "./@metamask/detect-provider";

// const provider = await detectEthereumProvider();

// if (provider) {
//   // From now on, this should always be true:
//   // provider === window.ethereum
//   startApp(provider); // initialize your app
// } else {
//   console.log("Please install MetaMask!");
// }

// const ethereumButton = document.querySelector(".enableEthereumButton");

// ethereumButton.addEventListener("click", () => {
//   //Will Start the metamask extension
//   ethereum.request({ method: "eth_requestAccounts" });
// });
var web3;

async function Connect() {
  await window.web3.currentProvider.enable();
  web3 = new web3(window.web3.currentProvider);
}

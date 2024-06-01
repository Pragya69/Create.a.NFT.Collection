/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Code example
// create a variable to hold your NFT's
let nftCount = 0;

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, uid, dresscolur) {
  const nft = {
    name: name,
    uid: uid,
    dresscolur: dresscolur  // Corrected key to match the parameter
  };
  nftCount++;
  return nft;
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs(nfts) {
  for (let i = 0; i < nfts.length; i++) {
    const nft = nfts[i];
    console.log("Name: " + nft.name);
    console.log("Uid: " + nft.uid);
    console.log("Dresscolur: " + nft.dresscolur);  // Corrected key to match the object property
    console.log("------------------");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total Supply: " + nftCount);
}

// call your functions below this line
const myNFTs = [];

const nft1 = mintNFT("pragya", "9346", "blue");  // Updated with the correct color
myNFTs.push(nft1);

const nft2 = mintNFT("abhisek", "9397", "black");  // Updated with the correct color
myNFTs.push(nft2);

listNFTs(myNFTs);
getTotalSupply();

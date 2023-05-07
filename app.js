import Block from "./Block.js";
import Blockchain from "./Blockchain.js";

let f5coin = new Blockchain();

f5coin.addBlock(new Block("05/04/2023", { amount: 10 }));
f5coin.addBlock(new Block("08/04/2023", { amount: 50 }));
f5coin.addBlock(new Block("15/04/2023", { amount: 5 }));

console.log(JSON.stringify(f5coin, null, 4));
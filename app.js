import Block from "./Block.js";
import Blockchain from "./Blockchain.js";
import Transaction from "./Transaction.js";

let f5coin = new Blockchain();
// console.log("Minting block 1...");
// f5coin.addBlock(new Block("05/04/2023", { amount: 10 }));
// console.log("Minting block 2...");
// f5coin.addBlock(new Block("08/04/2023", { amount: 50 }));
// console.log("Minting block 3...");
// f5coin.addBlock(new Block("15/04/2023", { amount: 5 }));

// console.log(f5coin.validateChain());

// Comportamiento malicioso \\
// f5coin.chain[1].data = { amount: 200 }; // Intento de añadir más monedas
// f5coin.chain[1].hash = f5coin.chain[1].calculateHash(); // Intento de cambiar el hash
// console.log(f5coin.validateChain());


f5coin.addTransaction(new Transaction('add1', 'add2', 200));
f5coin.addTransaction(new Transaction('add3', 'add4', 50));

console.log(`Mining started...`);
f5coin.mintPendingTransactions('add1');

console.log(`Balance of add1: ${f5coin.getBalanceOfAddress('add1')}`);

console.log(JSON.stringify(f5coin, null, 4));
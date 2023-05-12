import Block from "./Block.js";
import Transaction from "./Transaction.js";

export default class Blockchain {

    constructor() {
        this.chain = [this.createGensisBlock()];
        this.dificulty = 1;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGensisBlock() {
        return new Block("05/05/23", "the begining", "0");
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    // addBlock(newBlock) {
    //     newBlock.previousHash = this.getLastBlock().hash;
    //     newBlock.mintBlock(this.dificulty);
    //     this.chain.push(newBlock);
    // }

    addTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    mintPendingTransactions(minerAddress) {
        let block = new Block(Date.now(), this.pendingTransactions);
        block.previousHahs = this.getLastBlock().hash;
        block.mintBlock(this.dificulty);

        console.log(`Block minted successfully`, block);

        this.chain.push(block);

        this.pendingTransactions = [
            new Transaction(null, minerAddress, this.miningReward)
        ]
    }

    getBalanceOfAddress(address) {
        let balance = 0;

        for (const block of this.chain) {
            for (const transaction of block.transactions) {
                if (transaction.fromAddres === address) {
                    balance -= transaction.amount;
                }
                if (transaction.toAddress === address) {
                    balance += transaction.amount;
                }
            }
        }

        return balance;
    }

    validateChain() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash != currentBlock.calculateHash()) {
                // console.log(`Current Hash: ${currentBlock.hash}, and calculated: ${currentBlock.calculateHash()}`);
                return false;
            }

            if (currentBlock.previousHash != previousBlock.hash) {
                // console.log(i)
                // console.log(`Current block previous Hash: ${currentBlock.previousHahs}, and previous block hash: ${previousBlock.hash}`);
                return false;
            }
        }
        return true;
    }
}
import Block from "./Block.js";

export default class Blockchain {

    constructor() {
        this.chain = [this.createGensisBlock()];
    }

    createGensisBlock() {
        return new Block("05/05/23", "the begining", "0");
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLastBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    validateChain() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash != currentBlock.calculateHash()) {
                console.log(`Current Hash: ${currentBlock.hash}, and calculated: ${currentBlock.calculateHash()}`);
                return false;
            }

            if (currentBlock.previousHash != previousBlock.hash) {
                console.log(i)
                console.log(`Current block previous Hash: ${currentBlock.previousHahs}, and previous block hash: ${previousBlock.hash}`);
                return false;
            }
        }
        return true;
    }
}
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
}
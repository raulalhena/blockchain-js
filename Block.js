// import crypto from "crypto";

// let sha256Hasher = new jsSHA("SHA-256", this.timestamp + this.previousHahs + this.value, { numRounds: 1 });
// hashObj.update(pwdObj.value);
// var hash = hashObj.getHash("HEX");

export default class Block {

    constructor(timestamp, transactions, previousHahs = "") {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHahs = previousHahs;
        this.value = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        let sha256Hasher = new jsSHA("SHA-256", "TEXT", { numRounds: 1 });
        // const sha256Hasher = crypto.createHmac("sha256", this.timestamp + this.previousHahs + this.value);
        // return sha256Hasher.update(JSON.stringify(this.transactions)).digest("hex");
        sha256Hasher.update(JSON.stringify(this.timestamp + this.previousHahs + this.value + this.transactions));
        return sha256Hasher.getHash("HEX");
    }

    mintBlock(dificulty) {
        while (this.hash.substring(0, dificulty) !== Array(dificulty + 1).join('0')) {
            console.log(this.value);
            this.value++;
            this.hash = this.calculateHash();
        }

        // console.log(`Minted block: ${this.hash}`);
    }
}
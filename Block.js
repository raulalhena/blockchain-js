import crypto from "crypto";

export default class Block {
    constructor(timestamp, data, previousHahs = "") {
        this.timestamp = timestamp;
        this.data = data;
        this.previousHahs = previousHahs;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        const sha256Hasher = crypto.createHmac("sha256", this.timestamp + this.previousHahs);
        return sha256Hasher.update(JSON.stringify(this.data)).digest("hex");
    }
}
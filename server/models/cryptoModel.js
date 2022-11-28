import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    cryptos: []

}, {collection: "crypto", versionKey: false});

const crypto = mongoose.model('crypto', todoSchema);

export default crypto
 
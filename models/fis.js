const mongoose = require("mongoose");

const shema = mongoose.Schema;

const fisSchema = new shema({
    tarih:{
        type:  Date,
        required: true
    },
    no:{
        type: Number,
        required: true
    },
    kimden: {
        type: String,
        required: true
    },
    tur: {
        type: String,
        required: true
    },
    tutar: {
        type: Number,
        required: true
    }


},{timestamps: true});

const fis = mongoose.model("fis", fisSchema);

module.exports = fis;
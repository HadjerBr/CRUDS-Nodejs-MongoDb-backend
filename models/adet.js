const mongoose = require("mongoose");

const shema = mongoose.Schema;

const adetSchema = new shema({
    adetToplam:{
        type:  Number,
        required: true
    },
    adetEgitim:{
        type:  Number,
        required: true
    },
    adetSaglik:{
        type:  Number,
        required: true
    },
    adetGida:{
        type:  Number,
        required: true
    },
    adetGiyim:{
        type:  Number,
        required: true
    },
    adetKira:{
        type:  Number,
        required: true
    },
    


},{timestamps: true});

const adet = mongoose.model("adet", adetSchema);

module.exports = adet;
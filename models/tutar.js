const mongoose = require("mongoose");

const shema = mongoose.Schema;

const tutarSchema = new shema({
    tutarToplam:{
        type:  Number,
        required: true
    },
    tutarEgitim:{
        type:  Number,
        required: true
    },
    tutarSaglik:{
        type:  Number,
        required: true
    },
    tutarGida:{
        type:  Number,
        required: true
    },
    tutarGiyim:{
        type:  Number,
        required: true
    },
    tutarKira:{
        type:  Number,
        required: true
    },
    


},{timestamps: true});

const tutar = mongoose.model("tutar", tutarSchema);

module.exports = tutar;
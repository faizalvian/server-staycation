const mongoose = require("mongoose");
const bankSchema = new mongoose.Schema({
    nameBank : {
        type : String,
        required : true
    },
    rekNumber : {
        type : String,
        required : true
    },
    rekNumber : {
        type : String,
        required : true
    }
})
module.exports = mongoose.model('Bank', bankSchema)
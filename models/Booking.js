const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema

const bookingSchema = new mongoose.Schema({
    bookingStart : {
        type : Date,
        required : true
    },
    bookingEnd : {
        type : Date,
        required : true
    },
    itemId : [{
        _id : {
            type : ObjectId,
            ref : "Item",
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        night : {
            type : Number,
            required : true
        }
    }],
    memberId : [{
        type : ObjectId,
        ref : "Member"
    }],
    bankId : [{
        type : ObjectId,
        ref : "Bank"
    }],
    proofPayment : {
        type : String,
        required : true
    },
    bankFrom : {
        type : String,
        required : true
    },
    accHolder : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    }
   
})
module.exports = mongoose.model('Booking', bookingSchema)
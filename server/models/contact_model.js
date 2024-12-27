const mongoose = require('mongoose');

const contSchema= new mongoose.Schema({

    username:{
        type: String,
        required:true
    },
    phone:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,

    }
})


const contactModel=mongoose.model('contactModel',contSchema);

module.exports= contactModel;
const mongoose=require('mongoose');
const serviceSchema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    icon:{
        type:String
    },
    category:{
        type:String,
        required:true
    },
    created_at:{
        type:String
    }
});


export const Service = mongoose.model('Service',serviceSchema)
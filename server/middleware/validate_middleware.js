// const {z} = require('zlib');
// const Schema = require('../validators/auth_controller_validation');
// const { schema } = require('../models/user_models');
// const Schema = validation_signupSchema;
const validate= (Schema)=>async(req,res,next)=>{
    try {
        const parseBody =  await Schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (error) {
        console.log(error)
        res.status(400).send("error occured in validators")
    }
};


module.exports=validate;
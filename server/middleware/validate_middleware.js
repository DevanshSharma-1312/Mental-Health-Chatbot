// const {z} = require('zlib');
// const Schema = require('../validators/auth_controller_validation');
// const { schema } = require('../models/user_models');
// const Schema = validation_signupSchema;
// const validate= (Schema)=>async(req,res,next)=>{
//     try {
//         const parseBody =  await Schema.parseAsync(req.body);
//         req.body=parseBody;
//         next();
//     } catch (error) {
//         console.log(error)
//         res.status(400).send("error occured in validators")
//     }
// };


// module.exports=validate;

const validate = (Schema) => async (req, res, next) => {
    try {
        // Attempt to parse and validate the request body
        const parsedBody = await Schema.parseAsync(req.body);
        req.body = parsedBody;
        next(); // Proceed to the next middleware if validation succeeds
    } catch (error) {
        console.error("Validation Error:", error); // Improved error logging for debugging
        // Send a detailed error response for client debugging
        res.status(400).json({
            message: "Validation failed",
            errors: error.errors || "Unknown validation error",
        });
    }
};

module.exports = validate;

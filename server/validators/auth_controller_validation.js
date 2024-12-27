const { z } = require('zod');

const validation_signupSchema = z.object({
    username: z
    .string({ required_error: "username is required" })
    .trim()
    .min(3, {message: "username must have 3 letters"})
    .max(255, {message:"the username must not be exceed more than 255 words"}),


    email: z
    .string({ required_error: "email is required" })
    .trim()
    .email()
    .min(13, {message:"email must have 13 letters"})
    .max(255, {message:"the email must not be exceed more than 255 words"}),


    password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(6, {message:"password must have 6 letters"})
    .max(255,{message:"the password must not be exceed more than 255 words"}),


    age: z
    .number({ required_error: "age is required" })
    
    .min(15, {message:"you are uneraged"})
    .max(60, {message:"sorry, your age exceeds the terms and condition"}),



    phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10, {message:"phone must have 10 digits"})
    .max(10, {message:"the phone must not be exceed more than 10 digits"}),

}
)


module.exports= {validation_signupSchema};
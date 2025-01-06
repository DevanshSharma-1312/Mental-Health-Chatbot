const express = require('express');
// const { default: mongoose } = require('mongoose');
const User = require('../models/user_models');

const contactModel = require('../models/contact_model')
const bcrypt = require('bcrypt');




const home = async (req, res) => {
    try {
        res.
            status(200).
            send("hello");
    }
    catch (err) {
        console.log("error is occured", err)
    }
}



const register = async (req, res) => {


    const { username, age, phone, password, isAdmin, email } = req.body;

    try {
        // console.log(req.body);
        // res.status(200).json({data,message:"ths is first route from  auth_route "});    ??old way
        const user = await User.findOne({ email: email })


        // const saltRounds = 10;                                                                              // this is 1st method for bcrypting the password in controllers and the seconf method is on model.js

        //  const hash_password = await  bcrypt.hash(password, saltRounds);

        if (user) {
            res.status(400).send("user already exists");
            return;
        }

        const userCreated = await User.create({
            username,
            age,
            phone,
            password,
            isAdmin,
            email
        })
        // User.save();
        res.status(200).json(
            {
                message: req.body,
                success: true,
                token: await userCreated.generateToken()

            }
        )
        console.log('registraton successfull');
        // const user =  
    } catch (error) {
        console.log("error is occured in register",error)
        res.status(400).send("error")
    }
}



const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email:email });

        
            console.log(user)
            if (!user) {
                console.log('no such user registered')
               return res.status(400).json({message:'no such user registered'
                    
                })
               
                
            }
            // const userPassword =  bcrypt.compare(password,user.password)
        
        const userPassword = await user.comparePassword(password)
        console.log(userPassword)
        if (userPassword) {
            res.status(200).json({
                message: "login succussfull",
                user,
                token: await user.generateToken(),
                userId: user._id.toString(),
                success: true
            })
            console.log("login successfull");
            return;
        }

    } catch (error) {
        res.status(500).send("error ocured in login process");
        console.log("error in login", error);
    }

}


const contact = async (req, res) => {

    const { email, phone, username, message } = req.body;
    try {
        const user_contact = await contactModel.findOne({ email: email })
        if (user_contact) {
            console.log('user contacted the admin in past also');
           return res.status(201).send("this user already exsist");
        }
        const contactForm=await contactModel.create({
            username,
            email,
            phone,
            message
        })
        console.log("contact form submitted successfully",contactForm)
        res.status(200).json({
            success: true,
            message: "user details saved in db",
            contactForm
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "error occured in contact form"
        })
    }
}

module.exports = {
    home,
    register,
    login,
    contact
};
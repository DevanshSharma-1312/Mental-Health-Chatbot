const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
// const { mongo } = require('mongoose');


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,

    },
    age: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,

    },
    isAdmin: {
        type: Boolean
    }
})
// for hashing password we can use pre method


userSchema.pre('save', async function (next) {
    console.log('pre method', this)
    const user = this;
    if (user.isModified(this.password)) {
        next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, salt)
        user.password = hash_password;

    } catch (error) {
        next(error)
    }

})
userSchema.methods.generateToken = async function () {
    const user = this
    try {
        return jwt.sign({
            userId: user._id.toString(),
            email: user.email,
            isAdmin: user.isAdmin
        },
            "Secret_key",
            {
                expiresIn: '30d'
            }
        )
    } catch (error) {
        console.log('error occured', error)

    }
}

userSchema.methods.comparePassword= async function (password){
    try {
        return await bcrypt.compare(password,this.password);
    } catch (error) {
        console.log("error occured in compare method ", error);
        // return res.status(500).json({ message: "Internal server error", error: error.message });
    }
} 
const User = mongoose.model('User', userSchema);

module.exports = User;
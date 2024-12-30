const mongoose = require('mongoose');
// const url = require('../configuration/')
const dotenv = require("dotenv");
dotenv.config();


async function connectDb() {
    const url = `mongodb+srv://devanshsharma8001:devanshsharma8001@cluster0.bur2x.mongodb.net/thapa`;
    console.log(url);
    if (!url) {
        console.log("no url found")
        return;
    }
    try {
        await mongoose.connect(url);
        console.log('server is connected to database');
    } catch (error) {
        console.log("error is occured in database", error);
    }
}


module.exports = {
    connectDb
}




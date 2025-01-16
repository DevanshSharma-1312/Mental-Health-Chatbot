const express =require('express');
const services=express.Router();
const authcontroller= require('../controllers/auth_controller')

services.route('/service').get(authcontroller.service);

module.exports= services;
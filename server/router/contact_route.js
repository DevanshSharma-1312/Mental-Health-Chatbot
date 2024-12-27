const express =require('express');

const contact_controller =  require('../controllers/auth_controller');

const contact_router = express.Router();

contact_router.route('/contact').post(contact_controller.contact);

module.exports=contact_router;

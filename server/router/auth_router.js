const express = require('express');
const router = express.Router();



const authcontroller  = require("../controllers/auth_controller");
const validate = require('../middleware/validate_middleware');
const validation_signupSchema  = require('../validators/auth_controller_validation');
const jwt_middleware=require('../middleware/auth_middleware')


router.post("/register",validate(validation_signupSchema),authcontroller.register)



//*********validartors is not working ***** */
// router.route("/register").post(validate(validation_signupSchema),authcontroller.register)
router.route('/login').post(authcontroller.login)

router.route('/home').get(authcontroller.home);

router.route('/user').get(jwt_middleware,authcontroller.user)

module.exports = router;

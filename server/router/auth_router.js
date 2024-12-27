const express = require('express');
const router = express.Router();



const authcontroller  = require("../controllers/auth_controller");
const validate = require('../middleware/validate_middleware');
const validation_signupSchema  = require('../validators/auth_controller_validation');



router.post("/register",authcontroller.register)



//*********validartors is not working ***** */
// router.route("/register").post(validate(validation_signupSchema),authcontroller.register)
router.route('/login').post(authcontroller.login)

router.get("/hello",authcontroller.home);

module.exports = router;

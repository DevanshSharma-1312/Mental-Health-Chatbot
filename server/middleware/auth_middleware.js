const jwt = require('jsonwebtoken');
const User = require('../models/user_models')

const jwt_verification = async (req, res, next) => {
   const token = req.header('Authorization')
   if (!token) {
      res.status(44).json({
         mssg: "no token found "
      })
   }

   const jwtToken = token.replace('Bearer', "").trim()

   console.log(jwtToken)
   try {

      const userData = jwt.verify(jwtToken, 'Secret_key')
      console.log(userData)
      const user = await User.findOne({ email: userData.email }).select({
         password: 0
      })
      if (!user) {
         return res.status(404).json({
            mssg: "No such data is passed in payload"
         })
      }
      console.log(user)


      req.user = user;
      req.token = token;
      req.id = user._id


      //  res.status(200).json({
      //    token: jwtToken,
      //    DATA: userData,
      //    mssg: "auth is successfully done"
      // });
      next();
   } catch (error) {
      console.log("error occured in verifiatio", error)
   }
}

module.exports = jwt_verification
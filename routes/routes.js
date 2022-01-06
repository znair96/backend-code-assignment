const express = require('express');

const router = express.Router();

const loginController = require('../Controllers/loginController');

// const homeController = require('../Controllers/homeController');

const passport = require('passport');

router.get('/signin', loginController.getSignInPage);

router.get('/signup',loginController.getSignUpPage);

// router.post('/',homeController.validateUser);

// router.post('/signout',loginController.destroySession);

//use passport as a middleware to authenticate
router.post('/createSession',passport.authenticate(
    'local',
    {failureRedirect:'/signin'},
),loginController.createSession);


module.exports = router;
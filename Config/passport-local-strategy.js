const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../Models/Users');

//authentication using passportJS
passport.use(new LocalStrategy(
    {
        usernameField : 'email'
    },
    function(email,password,done){
        User.findOne({
           email:email
        },
        function(err,user)
        {
          if(err){
            console.log('Error ocuured --> passport');
            return done(err);
          }
          if(!user || user.password!=password){
            return done(null,false);
          }
          return done(null,user)
        }
        )
    }
  )
)
//Serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
})

//Deserialize the user to decide which key is to be kept in the cookies
passport.deserializeUser(function(id,done){
     User.findById(id,function(err,user){
         if(err){
             console.log(err);
             return done(err);
         }
         return done(null,user);
     })
})

module.exports = passport;

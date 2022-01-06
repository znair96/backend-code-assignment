const User = require('../Models/Users');
module.exports.validateUser = function(req,res){
    let userLoginEvent = req.body.operation;
    if(userLoginEvent == "register"){
         User.create({
             name: req.body.name,
             email: req.body.email,
             password:req.body.password
         },function(err,userList){
             if(err){
                 console.log(err);
                 return res.redirect('/signup');
             }
             console.log('##########',userList);
             return res.render('profile',{
                 title : "Profile Page",
                 name : userList.name,
                 email : userList.email
             })
         })
    }
    else
    {     
          User.findOne({
              email:req.body.email,
              password: req.body.password
          },function(err,user){
              if(err){
                  console.log('Email and password is incorrect');
              }
              res.cookie('user_id',user.id)
              return res.render('profile',{
                  title : "User profile",
                  name : user.name,
                  email : user.email
              })
          })
    }
    
}

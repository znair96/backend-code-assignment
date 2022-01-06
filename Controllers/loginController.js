module.exports.getSignInPage = function(req,res){
    if(!req.cookies){
        return res.render('signin',{
            title : "Sign In Page"
        });
    }
    return res.render('signin',{
        title : "Sign In Page"
    })
}

module.exports.getSignUpPage = function(req,res){
    return res.render('signup',{
        title : "Registration Page"
    })
}

module.exports.signOut = function(req,res){
    // console.log('Clearing Cookie');
    res.clearCookie('user_id');
    //For preventing cache
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.redirect('/signin');
}
module.exports.createSession = function(req,res){
    return res.render('profile',{
        title : "Profile Page",
        name : "",
        email : ""
    })
}


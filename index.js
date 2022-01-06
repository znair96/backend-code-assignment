const express = require('express');

const path = require('path');

const app = express();

const port = 8000;

const cookieParser = require('cookie-parser');

const db = require('./Config/mongoose');

const session = require('express-session');

const passport = require('passport');

const passportLocal = require('./Config/passport-local-strategy');

const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded({extended : true}));

app.set('view engine','ejs');

app.set(express.static(path.join(__dirname,'views')));



app.use(cookieParser());

app.use(expressLayouts);

app.use(session({
    name:'Codeial',
    secret:"blahsomething",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge: (1000 * 60 * 100)
    }
}))

app.use(passport.initialize());

app.use(passport.session());

app.use(require('./routes/routes'));

app.listen(8000,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Server started successfully at port '+port);
})

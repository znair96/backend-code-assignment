const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user_db');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Connection not created ...'));

db.once('open', function(){
    console.log('Mongo DB connection created successfully');
})
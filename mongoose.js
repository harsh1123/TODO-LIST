
//setting up the database


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ToDoList');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to the database'));

db.once('open',function(){

    console.log('successly fully connected to the database');

});


module.exports = db;
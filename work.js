const mongoose = require('mongoose');


//creating schema for the database and including content date and todo work

const workSchema = mongoose.Schema({

    content:{
        type:String,
        required:true,

    },
    date:{
        type:Date,
        required:true
    },
    todo:{
        type:String,
        required:true
       
    }

},{
    timestamps:true
});

const Work = mongoose.model('Work',workSchema);

module.exports = Work;
const express = require('express');

const Work = require('../models/work');

const router = express.Router();

//sending our schema and title to the home page


router.get('/',function(req,res){
    
   Work.find({},function(err,work){
        if(err){
            console.log(err);
            return;
        }
        return res.render('index',{
         title:"TODO LIST",
         work:work
   
     });
 
    });
   

});


//fetching data from the form and creating schema for the database redirecting to the main page

router.post('/addData',function(req,res){

    Work.create({

        content: req.body.content,
        date:req.body.date,
        todo:req.body.todo
      


    },function(err,task){

        if(err)
        {
            console.log(err);
            return;
        }

        

        return res.redirect('back');

    });


});

// creating router for deleting data from the data base

router.post('/deleteData',function(req,res){
 
   for(let i in req.body)
   {
       Work.findByIdAndDelete(req.body[i],function(err){
           if(err)
           {
               console.log(err);
               return;
           }
           return res.redirect('back');
       });
   }

 
 });





// exporting the router to the main page

  module.exports = router;
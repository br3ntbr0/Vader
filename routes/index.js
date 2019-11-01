var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send(200);
  res.render('index', { 
     //define some simple view variables for rendering page elements in this poc
     pocTitleText:     "Project Vader: A Proof of Concept Application",
     pocHeaderText:    "Project Vader",  
     pocQuoteText:     "I find your lack of faith disturbing.",
     
     pocImage1:        "darth_1.jpg",
     pocImage1Name:    "I am your father!",  
     
     pocImage2:        "darth_2.jpg",
     pocImage2Name:    "If only you knew the power of the dark side!",
     
     pocImage3:        "darth_3.jpg",
     pocImage3Name:    "I… I wouldn’t have it any other way, Master."    
  });
});

module.exports = router;


   



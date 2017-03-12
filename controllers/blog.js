
var express = require("express");
var request = require('request');
var router = express.Router();

//blog routes
router.get("/", function(req,res){
	Post.find({})
	.sort([["date", "descending"]])
	.exec(function(err, doc) {
	    if (err) {
	      console.log(err);
	    }
	    else {
	      res.send(doc);
	    }
	});
});

router.post("/create", function(req,res){
  var post = new Post({
    title: req.body.title,
    date: req.body.date,
    body: req.body.body
    })
  post.save(function(err){
    if(err) {
      res.json({status: 'err'})
    } else {
      res.json({status: 'saved'})
    }
  })
});

module.exports = router;

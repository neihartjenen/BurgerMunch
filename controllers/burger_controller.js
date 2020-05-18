var express = require("express");
var router = express.Router();
var burgers = require("../models/burgertask.js");

router.get("/",function(req,res){
    burgers.all(function(data){
        var showBurger ={
            burgers:data
        };
        console.log();
        res.render("index", showBurger);
    });
});
router.post ("/api/burgers", function(req,res){
    console.log(req.body.devoured);
    burgers.create([
         "devoured"
        req.body.title, 0], 
        function(result){
        res.json({id: result.inserId})
    });

});

router.put("/api/burger/:id", function(req,res){
    var condition = "id =" + req.params.id;
    burgers.update({
        devoured:req.body.devoured
    }, condition,function(result){
        if(result.changedRows==0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

router.delete("/api/burger/:id", function(req, res){
    var condition="id =" + req.params.id;
    burgers.delete(condition, function(result){
        if(result.affectedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

module.exports= router;

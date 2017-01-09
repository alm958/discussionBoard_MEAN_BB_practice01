var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

module.exports = {
    create: function(req, res){
        Comment.create(req.body)
            .then(function(comment){
                console.log(comment);
                res.json(comment);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    index: function(req, res){
        Comment.find({})
            .then(function(comments){
                res.json(comments);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    delete: function(req, res){
        console.log(req.params);
        Comment.remove({_id:req.params.id})
            .then(function(){
                res.json(true);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    update: function(req, res){
        console.log("in update");
        console.log(req.params.id);
        console.log(req.body);
        Comment.findByIdAndUpdate(req.params.id, req.body, { new: true})
            .then(function(updatedCom){
                console.log(updatedCom);
                res.json(updatedCom);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    }


}

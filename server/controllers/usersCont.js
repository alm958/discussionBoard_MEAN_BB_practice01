var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    create: function(req, res){
        console.log('in SS usersCont create');
        console.log(req.body.name);
        User.findOne({'name':req.body.name})
            .then(function(user){
                console.log('in user create .then');
                console.log(user);
                if (user == null){
                    User.create(req.body)
                        .then(function(user){
                            console.log('back from user create');
                            console.log(user);
                            res.json(user);
                        })
                        .catch(function(err){
                            console.log(err);
                            res.json(err);
                        })
                }
                else {
                    res.json(user);
                }
            })
            .catch(function(err){
                console.log('in create .catch');
                console.log(err);
            });
    },
    index: function(req, res){
        User.find({})
            .then(function(users){
                res.json(users);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    delete: function(req, res){
        console.log(req.params);
        User.remove({_id:req.params.id})
            .then(function(){
                res.json(true);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    updateTopiccount: function(req, res){
        console.log('in server cont updateTopiccount');
        console.log(req.params.id);
        console.log(req.body);
        User.findByIdAndUpdate({_id: req.params.id}, {$inc:{topiccount:1}}, { new: true})
            .then(function(updatedUser){
                console.log('back from mongoose topic count increment');
                console.log(updatedUser);
                res.json(updatedUser);
            })
            .catch(function(err){
                console.log('in mongoose topic count increment catch statment');
                console.log(err);
                res.json(err);
            });
    },
    updatePostcount: function(req, res){
        console.log(req.params.id);
        console.log(req.body);
        User.findByIdAndUpdate({_id: req.params.id}, {$inc:{postcount:1}}, { new: true})
            .then(function(updatedUser){
                console.log(updatedUser);
                res.json(updatedUser);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    updateCommentcount: function(req, res){
        console.log(req.params.id);
        console.log(req.body);
        User.findByIdAndUpdate({_id: req.params.id}, {$inc:{commentcount:1}}, { new: true})
            .then(function(updatedUser){
                console.log(updatedUser);
                res.json(updatedUser);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    }


}

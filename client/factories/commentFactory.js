app.factory('commentFactory', ['$http', function($http){
    var factory = {};
    factory.commentlist = [];
    factory.addComment = function(comment, callback){
        $http.post('/comments', comment)
            .then(function(addedComment){
                factory.commentlist.push(addedComment);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.getComments = function(callback){
        $http.get('/comments')
            .then(function(comments){
                factory.commentlist = comments.data;
                callback(factory.commentlist);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.findComment = function(id){
        return factory.commentlist.find(comment => comment._id == id)
    };
    factory.updateComment = function(comment){
        $http.put(`/comments/${comment._id}`, comment)
            .then(function(response){
                var comment = response.data;
                var updateIndex = factory.commentlist.findIndex(x => x._id === comment._id);
                if (updateIndex > -1) {
                 factory.commentlist[updateIndex] = comment;
                }
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.delComment = function(id, callback){
        $http.delete(`/comments/${id}`)
            .then(function(response){
                console.log(response);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }


    return factory;
}])

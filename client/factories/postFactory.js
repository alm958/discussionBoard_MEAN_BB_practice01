app.factory('postFactory', ['$http', function($http){
    var factory = {};
    factory.postlist = [];
    factory.addPost = function(post, callback){
        $http.post('/posts', post)
            .then(function(addedPost){
                factory.postlist.push(addedPost);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.getPosts = function(callback){
        $http.get('/posts')
            .then(function(posts){
                factory.postlist = posts.data;
                callback(factory.postlist);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.findPost = function(id){
        return factory.postlist.find(post => post._id == id)
    };
    factory.updatePost = function(post){
        $http.put(`/posts/${post._id}`, post)
            .then(function(response){
                var post = response.data;
                var updateIndex = factory.postlist.findIndex(x => x._id === post._id);
                if (updateIndex > -1) {
                 factory.postlist[updateIndex] = post;
                }
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.delPost = function(id, callback){
        $http.delete(`/posts/${id}`)
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

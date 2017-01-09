app.factory('userFactory', ['$http', '$location', '$cookies', function($http, $location, $cookies){
    var factory = {};
    var currentUserName = $cookies.get('currentUserName');
    var currentUserId = $cookies.get('currentUserId');
    factory.regUser = function(user, callback){
        console.log('in userFactory regUser');
        $http.post('/users', user)
            .then(function(returnedUser){
                console.log(returnedUser.data.name);
                $cookies.put('currentUserName',returnedUser.data.name);
                $cookies.put('currentUserId',returnedUser.data._id);
                $location.path('/dashboard');
                callback(currentUserName);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.findUser = function(id){
        return factory.userlist.find(user => user._id == id)
    };
    factory.updateTopiccount = function(userid){
        console.log('in factory updateTopiccount');
        console.log(userid);
        $http.put(`/users/topics/${userid}`)
            .then(function(response){
                console.log('back from server post updateTopiccount');
            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.updatePostcount = function(userid){
        $http.put(`/users/posts/${userid}`)
            .then(function(response){

            })
            .catch(function(err){
                console.log(err);
            });
    }
    factory.updateCommentcount = function(userid){
        $http.put(`/users/comments/${userid}`)
            .then(function(response){
                
            })
            .catch(function(err){
                console.log(err);
            });
    }


    return factory;
}])

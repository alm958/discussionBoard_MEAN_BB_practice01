app.controller('topicsController', ['$scope','$route','$routeParams', 'topicFactory','postFactory','commentFactory',function topicsController($scope,$route,$routeParams,topicFactory,postFactory,commentFactory){

    function GetTList(tlist){
        $scope.topiclist = tlist;
    }
    $scope.sortType     = 'created_at'; // set the default sort type
    $scope.sortReverse  = true;
    $scope.topiclist = topicFactory.topiclist;


    $scope.addPost = function(){
        console.log($scope.newPost);
        postFactory.addPost($scope.newPost, function(){
            $scope.newPost = {};
            $scope.getPosts();
        });
        console.log($scope.postlist);
    }
    $scope.addComment = function(){
        console.log($scope.newComment);
        commentFactory.addComment($scope.newComment, function(){
            $scope.newComment = {};
            $scope.getComments();
        });
        console.log($scope.commentlist);
    }

    $scope.getTopics = function(){
        topicFactory.getTopics(GetOList);
    }
    $scope.delTopic = function(id){
        console.log(id);
        topicFactory.delTopic(id, function(){
            $scope.getTopics();
        })
    }
    $scope.findTopicById = function(){
        console.log('in topic cont findTopicById');
        console.log($route.current.params.id);
        var id = $route.current.params.id;
        var topic = topicFactory.findTopic(id);
        $scope.topic = topic;
    }
    $scope.updateTopic = function(){
        console.log($scope.topic);
        topicFactory.updateTopic($scope.topic)
    }

}])

app.controller('topicsController', ['$scope','$route','$routeParams','$cookies', 'topicFactory','postFactory','commentFactory',function topicsController($scope,$route,$routeParams,$cookies,topicFactory,postFactory,commentFactory){

    function GetTList(tlist){
        $scope.topiclist = tlist;
    }
    $scope.sortType     = 'created_at'; // set the default sort type
    $scope.sortReverse  = true;
    $scope.topiclist = topicFactory.topiclist;


    $scope.addPost = function(){
        console.log($scope.nPost);
        $scope.nPost.user = $cookies.get('currentUserId');
        console.log($scope.nPost);
        postFactory.addPost($scope.nPost, function(){
            $scope.nPost = {};
            $scope.findTopicById();
        });
        // console.log($scope.postlist);
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

    $scope.findTopicById = function(){
        console.log('in topic cont findTopicById');
        console.log($route.current.params.id);
        var id = $route.current.params.id;
        topicFactory.findTopicById(id, function(){
            $scope.grabCurrentTopic();
        });
    }
    $scope.updateTopic = function(){
        console.log($scope.topic);
        topicFactory.updateTopic($scope.topic)
    }
    $scope.consolelogdata = function(){
        console.log($scope.topic);

    }
    $scope.grabCurrentTopic = function(){
        $scope.topic = topicFactory.sendCurrentTopic();
    }


}]);

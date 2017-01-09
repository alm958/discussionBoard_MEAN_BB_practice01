app.controller('dashboardController', ['$scope','$route','$routeParams', '$cookies', 'topicFactory', 'userFactory',function dashboardController( $scope, $route, $routeParams, $cookies, topicFactory, userFactory){
    $scope.currentUserName = $cookies.get('currentUserName');
    $scope.currentUserId = $cookies.get('currentUserId');
    console.log($scope.currentUserName);
    function GetTList(tlist){
        $scope.topiclist = tlist;
    }
    $scope.topiclist = topicFactory.topiclist;


    $scope.addTopic = function(){
        $scope.nTopic.user = $scope.currentUserId;
        console.log($scope.nTopic);
        topicFactory.addTopic($scope.nTopic, function(){
            $scope.nTopic = {};
            $scope.getTopics();
            $scope.updateTopiccount();
        });
        console.log($scope.topiclist);
    }

    $scope.getTopics = function(){
        topicFactory.getTopics(GetTList);
    }
    $scope.showUser = function(id){
        userFactory.getUser(id);
    }
    $scope.findTopicById = function(id){
        console.log('in dash cont findTopicById');
        console.log(id);
        var topic = topicFactory.findTopicById(id);
        $scope.topic = topic;

    }
    // $scope.findTopicById = function(){
    //     console.log($route.current.params.id);
    //     var id = $route.current.params.id;
    //     var topic = topicFactory.findTopic(id);
    //     $scope.topic = topic;
    // }
    $scope.updateTopiccount = function(){
        console.log('in controller updateTopiccount');
        userFactory.updateTopiccount($scope.currentUserId);
    }
    $scope.updatePostcount = function(){
        userFactory.updatePostcount($scope.currentUserId);
    }
    $scope.updateCommentcount = function(){
        userFactory.updateCommentcount($scope.currentUserId);
    }



}]);

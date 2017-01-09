app.controller('usersController', ['$scope','$route','$routeParams', 'userFactory',function usersController($scope,$route,$routeParams,userFactory){


    $scope.regUser = function(){
        console.log('in regUser in userController');
        console.log($scope.newUser);
        userFactory.regUser($scope.newUser, function(){
            $scope.newUser = {};
            console.log();
        });
    }
    $scope.showUser = function(id){
        userFactory.getUser(id);
    }
    $scope.findUserById = function(){
        console.log($route.current.params.id);
        var id = $route.current.params.id;
        var user = userFactory.findUser(id);
        $scope.user = user;
    }
    $scope.updateUser = function(){
        console.log($scope.user);
        userFactory.updateUser($scope.user)
    }

}])

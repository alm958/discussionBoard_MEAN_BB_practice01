var app = angular.module('app',['ngRoute', 'ngCookies']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'partials/_loginReg.html',
        controller: 'usersController'
    })
    .when('/dashboard',{
        templateUrl: 'partials/_dashboard.html',
        controller: 'dashboardController'
    })
    .when('/user/:id',{
        templateUrl: 'partials/_user.html',
        controller: 'usersController'
    })
    .when('/topic/:id',{
        templateUrl: 'partials/_topic.html',
        controller: 'topicsController'
    })
    .otherwise({
         redirectTo: "/"
     });
}]);

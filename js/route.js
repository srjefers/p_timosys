var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl : 'pages/footer.html',
            controller : 'main'
        })
        .when('/c',{
            templateUrl : 'pages/footer.html'
        });
});
app.controller('main',function($scope){
    $scope.message = 'cero html';
});

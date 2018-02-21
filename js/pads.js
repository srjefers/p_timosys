var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl : 'pages/cero.html',
            controller : 'main'
        })
        .when('/uno',{
            templateUrl : 'pages/uno.html',
            controller : 'unom'
        })
        .when('/dos',{
            templateUrl : 'pages/dos.html',
            controller : 'dosm'
        })
        .when('/tres',{
            templateUrl : 'pages/tres.html',
            controller : 'tresm'
        });
});
app.controller('main',function($scope){
    $scope.message = 'cero html';
});
app.controller('unom',function($scope){
    $scope.message = 'uno html';
});
app.controller('dosm',function($scope){
    $scope.message = 'dos html'
});
app.controller('tresm',function($scope){
    $scope.message = 'tres html'
});
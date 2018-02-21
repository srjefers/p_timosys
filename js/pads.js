var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl : 'pages/footer.html',
            controller : 'main'
        })
        .when('/uno',{
            templateUrl : 'pages/uno.html',
            controller : 'unom'
        });
});
app.controller('main',function($scope){
    $scope.message = 'cero html';
});
app.controller('unom',function($scope){
    $scope.message = 'uno html';
});
var app=angular.module('kaifanla',['ng','ngRoute']);
//配置路由词典
app.config(function($routeProvider){
    $routeProvider
        .when('/start',{templateUrl:'tpl/start.html',controller:'startCtrl'})
        .when('/main',{templateUrl:'tpl/main.html',controller:'mainCtrl'})
        .when('/detail',{templateUrl:'tpl/detail.html',controller:'detailCtrl'})
        .when('/order',{templateUrl:'tpl/order.html',controller:'orderCtrl'})
        .when('/myOrder',{templateUrl:'tpl/myOrder.html',controller:'myOrderCtrl'})
        .otherwise({redirectTo:'/start'});
});
//公用点击跳转
app.controller('parentCtrl',['$scope','$location',function($scope,$location){
    $scope.jump=function(arg){
        $location.path(arg);
    }
}]);
app.controller('startCtrl',['$scope',function(
    $scope){

}]);
app.controller('mainCtrl',['$scope',function($scope){}]);
app.controller('detailCtrl',['$scope',function($scope){}]);
app.controller('orderCtrl',['$scope',function($scope){}]);
app.controller('myOrderCtrl',['$scope',function($scope){}]);



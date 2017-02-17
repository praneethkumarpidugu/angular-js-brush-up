
//Application name for module.
var app = angular.module('minmax', []);

//We will inject the $http service into the controller.
app.controller('MinMaxCtrl', function($scope, $http) {
    "use strict";
    //We will use this formModel to bind to the view
    $scope.formModel = {};

    $scope.onSubmit = function () {
        console.log("Hey I'm submitted");
        console.log($scope.formModel);


    //POST to an api end point
    $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).success(function (data) {
        console.log(":)");
    }).error(function (data) {
        console.log(":(");
    });
    };
});
// https://minmax-server.herokuapp.com/register/'

//Define our controller to associate to our DOM element
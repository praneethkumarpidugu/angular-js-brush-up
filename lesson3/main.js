
//Application name for module.
var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function($scope) {
    "use strict";
    //We will use this formModel to bind to the view
    $scope.formModel = {};

    $scope.onSubmit = function () {
      console.log("Hey I'm submitted");
      console.log($scope.formModel);
    };
});
// https://minmax-server.herokuapp.com/register/'

//Define our controller to associate to our DOM element
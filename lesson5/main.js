/**
 * Created by praneethkumar on 26/02/17.
 */

var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function ($scope, $http) {

    $scope.formModel = {};

    //Create a function onSubmit for Register Button

    $scope.onSubmit = function () {
        console.log("I'm submitted");
        console.log($scope.formModel);

        $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
            success(function (data) {
            console.log(":)");
        }).error(function (data) {
            console.log(":(");
        });
    };

});
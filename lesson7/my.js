/**
 * Created by praneethkumar on 09/03/17.
 */
//Define angular app
var app = angular.module('minmax', ['jcs-autoValidate', 'angular-ladda']);

//run intialization
app.run(function (defaultErrorMessageResolver) {
    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
        errorMessages['tooYoung'] = "You must be atleast {0} years old to use this website";
        errorMessages['tooOld'] = "You must be max {0} years old to use this site"
        errorMessages['badUsername'] = "Username can only contain numbers, letters and _";
    });
});

//controller

app.controller('MinMaxCtrl', function ($scope, $http) {

    $scope.formModel = {};

    $scope.onSubmit = function () {
      console.log("I'm submitted");
      $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).then(function (data) {
                console.log(":)");
            }).(function (data) {
                console.log(":(");
        });
    };
});
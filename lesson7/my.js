/**
 * Created by praneethkumar on 09/03/17.
 */
//Define angular app
var app = angular.module('minmax', ['jcs-autoValidate']);
//controller

//run intialization
app.run(function (defaultErrorMessageResolver) {
    defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
        errorMessages['tooYoung'] = "You must be atleast {0} years old to use this website";
        errorMessages['tooOld'] = "You must be max {0} years old to use this site"
        errorMessages['badUsername'] = "Username can only contain numbers, letters and _";
    });
});
app.controller('MinMaxCtrl', function ($scope, $http) {
    console.log($scope);
    $scope.formModel = {};

    $scope.onSubmit = function () {
      console.log("I'm submitted");
      $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).success(function (data) {
          console.log(":)")
      }).error(function (data) {
          console.log(":(")
      });
    };
});

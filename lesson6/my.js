/**
 * Created by praneethkumar on 06/03/17.
 */
var app = angular.module('minmax', [
    'jcs-autoValidate'
]);

app.run(function (defaultErrorMessageResolver) {
   defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
      errorMessages['tooYoung'] = 'You must be atleast {0} years old to use this site';
      errorMessages['tooOld'] = 'You must be max {0} years old to use this site';
      errorMessages['badUsername'] = 'Username can only contain numbers, letters and _';
   });
});

app.controller('MinMaxCtrl', function ($scope, $http) {
    console.log($scope);
    $scope.formModel = {};

    $scope.onSubmit = function () {

        console.log("Hey I'm submitted");
        console.log($scope.formModel);
        $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).success(function (data) {
            console.log(":)");
        }).error(function (data) {
            console.log(":(");
        });


    };
});
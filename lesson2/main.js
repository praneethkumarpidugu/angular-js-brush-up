var app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function ($scope) {
    //We will use this formModel to bind it to the view.
    $scope.formModel = {};

    //We are going to access this function in html
    $scope.onSubmit = function () {
        console.log("Hey I'm submitted");
        console.log($scope.formModel);
    };
});
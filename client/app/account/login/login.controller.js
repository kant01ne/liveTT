'use strict';

angular.module('liveTtApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window, $mdToast) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        Auth.login({
          username: $scope.user.username,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };
    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });

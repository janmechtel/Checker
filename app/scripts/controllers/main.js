'use strict';

/**
 * @ngdoc function
 * @name checkerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the checkerApp
 */
angular.module('checkerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.addCheck = function(type) {
      var currentUser = Parse.User.current();
      if (currentUser) {
        var Check = Parse.Object.extend('Check');
        var check = new Check();
        check.set('type', type);
        check.setACL(new Parse.ACL(currentUser));
        check.save();
      } else {
        alert('Login first!')
      }
    };
  });

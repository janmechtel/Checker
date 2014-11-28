'use strict';

/**
 * @ngdoc function
 * @name checkerApp.controller:MainCtrl
 * @description
 * # ChecksCtrl
 * Controller of the checkerApp
 */
angular.module('checkerApp')
  .controller('ChecksCtrl', function ($scope) {
    var Check = Parse.Object.extend('Check');
    var collection = Parse.Collection.extend({
      model: Check
    });
    $scope.checks = new collection();
    $scope.checks.query = new Parse.Query(Check);
    $scope.checks.fetch();

    $scope.addCheck = function(type) {
      var currentUser = Parse.User.current();
      if (currentUser) {
        var Check = Parse.Object.extend('Check');
        var check = new Check();
        check.set('type', type);
        check.setACL(new Parse.ACL(currentUser));
        check.save();
        $scope.checks.fetch();
      } else {
        alert('Login first!')
      }
    };
  });

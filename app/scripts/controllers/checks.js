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
    $scope.init = function(type)
    {
      //This function is sort of private constructor for controller
      $scope.type = type;
      var check = Parse.Object.extend('Check');
      var collection = Parse.Collection.extend({
        model: check
      });
      $scope.checks = new collection();
      $scope.checks.query = new Parse.Query(check);
      $scope.checks.query.equalTo('type', $scope.type);
      $scope.checks.fetch();
    };



    $scope.addCheck = function() {
      var currentUser = Parse.User.current();
      if (currentUser) {
        var Check = Parse.Object.extend('Check');
        var check = new Check();
        check.set('type', $scope.type);
        check.setACL(new Parse.ACL(currentUser));
        check.save();
        $scope.checks.fetch();
      } else {
        alert('Login first!')
      }
    };
  });

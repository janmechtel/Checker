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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

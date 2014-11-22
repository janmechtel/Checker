'use strict';

/**
 * @ngdoc function
 * @name checkerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the checkerApp
 */
angular.module('checkerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

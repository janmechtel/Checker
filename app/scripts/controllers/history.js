'use strict';

/**
 * @ngdoc function
 * @name checkerApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the checkerApp
 */
angular.module('checkerApp')
  .controller('HistoryCtrl', function ($scope) {

    $scope.types = [];
    $scope.stats = {};

    var check = Parse.Object.extend('Check');
    var collection = Parse.Collection.extend({
      model: check
    });
    $scope.checks = new collection();
    $scope.checks.query = new Parse.Query(check);
    $scope.checks.fetch({
        success: function(user){
          angular.forEach( $scope.checks, function(value, key) {
            var dd = value.createdAt.getDate();
            var mm = value.createdAt.getMonth()+1; //January is 0!
            var yyyy = value.createdAt.getFullYear();
            var date = yyyy + '-' + mm + '-' + dd
            if ($scope.stats[date]) {
              if ($scope.stats[date][value.attributes.type]) {
                $scope.stats[date][value.attributes.type] += 1;
              } else {
                $scope.stats[date][value.attributes.type] = 1;
              }
            } else {
              $scope.stats[date] = {};
              $scope.stats[date][value.attributes.type] = 1;
            }
            if($scope.types.indexOf(value.attributes.type) == -1) {
              $scope.types.push(value.attributes.type);
            }
          });
        }
    });
  });

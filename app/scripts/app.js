'use strict';

/**
 * @ngdoc overview
 * @name checkerApp
 * @description
 * # checkerApp
 *
 * Main module of the application.
 */
angular
  .module('checkerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'parse-angular',
	  'parse-angular.enhance',
    'ParseServices' /* this is the Parse SDK */,
    'FacebookPatch' /* our facebook angular wrapper so we can use FB.apiAngular instead of FB.api */

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(['ParseSDK', function(ParseService) {
  }]);

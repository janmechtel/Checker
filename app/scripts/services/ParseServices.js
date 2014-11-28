angular.module('ParseServices', [])
.factory('ParseSDK', function() {

  // pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
  Parse.initialize("HYhdYRTcHtYiwkb9GYRaR8B8DTEMMExawkLbgiZh", "jA1BsowwPZngJzQK3sHIn1wEmxGgfZTQZIlmPZjj");

  // FACEBOOK init
  window.fbPromise.then(function() {

    Parse.FacebookUtils.init({

      // pro-tip: swap App ID out for PROD App ID automatically on deploy using grunt-replace
      appId: 1547221612159475, // Facebook App ID
      status     : true, // check Facebook Login status
      cookie     : true, // enable cookies to allow Parse to access the session
      xfbml      : true,
      version    : 'v2.2',
      frictionlessRequests: true // recommended
    });

  });
  return true;

});

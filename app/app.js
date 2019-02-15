(function () {
  "use strict";
  angular.module("app", ["ngRoute", "ui.bootstrap"]).config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider.when("/home", {
      template: "<beers-list></beers-list>"
    }).when("/favorite", {
      template: "<beers-list></beers-list>"
    }).otherwise('/home');
  }]);
  angular.module("app").controller("AppCtrl", ["$scope", "SharedDataSvc", function ($scope, sharedDataSvc) {
    $scope.searchText = "";
    $scope.search = function () {
      for (var item in sharedDataSvc.beers) {
        if (sharedDataSvc.beers[item].name.toLowerCase().match(new RegExp($scope.searchText.toLowerCase(), 'g'))) {
          sharedDataSvc.beers[item].display = false;
        } else {
          sharedDataSvc.beers[item].display = true;
        }
      }
    };
  }]);
})();
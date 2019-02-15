(function (app) {
  "use strict";
  app.factory("GlobalSvc", ["$http", "$q", function ($http, $q) {
    return {
      Get: function (url, data) {
        return $http({
          url: url,
          method: "get",
          type: "json",
          data: data,
        }).then(function (res) {
          return res;
        }).catch(function (err) {
          return err;
        });
      },
      Post: function (url, data) {
        return $http({
          url: url,
          method: "post",
          type: "json",
          data: data,
        }).then(function (res) {
          return res;
        }).catch(function (err) {
          return err;
        });
      }
    }
  }]);
})(angular.module("app"));
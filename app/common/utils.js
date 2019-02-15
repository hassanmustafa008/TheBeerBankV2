(function (app) {
  "use strict";
  app.factory("Utils", ["$uibModal", function ($uibModal) {
    return {
      OpenModalInstance: function (config) {
        var modalInstance = $uibModal.open({
          templateUrl: config.templateUrl,
          controller: config.controller,
          controllerAs: config.controllerAs,
          size: config.size,
          resolve: {
            data: function () {
              return config.data;
            }
          }
        });
        modalInstance.result.then(function (selectedItem) {
          $ctrl.selected = selectedItem;
        }, function () {
          console.info('Modal dismissed at: ' + new Date());
        });
      }
    }
  }]);
})(angular.module("app"));
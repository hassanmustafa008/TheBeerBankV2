(function (app) {
  "use strict";
  app.controller("ModalInstanceCtrl", ["$uibModalInstance", "data", function ModalInstanceCtrl($uibModalInstance, data) {
    debugger;
    var $ctrl = this;
    $ctrl.beer = data;
    $ctrl.ok = function () {
      $uibModalInstance.close($ctrl.selected);
    };

    $ctrl.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }]);
})(angular.module('app'));

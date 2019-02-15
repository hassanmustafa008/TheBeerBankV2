(function (app) {
  "use strict";
  app.directive('openModal', {
    scope: {
    },
    templateUrl: 'app/modules/modal/modal.html',
    controller: ['$uibModal', 'GlobalSvc', function BeersListController($uibModal, globalSvc) {
      var modalInstance = $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl',
        size: size,
        appendTo: parentElem,
        resolve: {
          items: function () {
            return $ctrl.items;
          }
        }
      });
      modalInstance.result.then(function (selectedItem) {
        $ctrl.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
      // globalSvc.Get("https://api.punkapi.com/v2/beers", {}).then(function (data) {
      //   debugger;
      //   console.log(data);
      //   ctrl.beersList = data.data;
      // }).catch(function (err) {
      //   console.log(err);
      // });
    }
    ]
  });
})(angular.module('app'));

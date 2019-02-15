(function (app) {
  "use strict";
  app.component('beersList', {
    templateUrl: 'app/modules/beers/beers.html',
    controller: ['$uibModal', 'GlobalSvc', 'SharedDataSvc', function beersListController($uibModal, globalSvc, sharedDataSvc) {
      var $ctrl = this;
      $ctrl.showBeer = function (item) {
        var modalInstance = $uibModal.open({
          templateUrl: 'app/modules/beer/beer.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: '$ctrl',
          size: 'lg',
          resolve: {
            data: function () {
              return item;
            }
          }
        });
        modalInstance.result.then(function (selectedItem) {
          $ctrl.selected = selectedItem;
        }, function () {
          console.info('Modal dismissed at: ' + new Date());
        });
      };
      globalSvc.Get("https://api.punkapi.com/v2/beers", {}).then(function (data) {
        console.log(data);
        $ctrl.beersList = data.data;
        sharedDataSvc.beers = data.data;
      }).catch(function (err) {
        console.log(err);
      });
    }
    ]
  });
})(angular.module('app'));

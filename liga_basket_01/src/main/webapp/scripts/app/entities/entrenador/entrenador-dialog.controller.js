'use strict';

angular.module('ligaBasket01App').controller('EntrenadorDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'entity', 'Entrenador', 'Equipo',
        function($scope, $stateParams, $uibModalInstance, entity, Entrenador, Equipo) {

        $scope.entrenador = entity;
        $scope.equipos = Equipo.query();
        $scope.load = function(id) {
            Entrenador.get({id : id}, function(result) {
                $scope.entrenador = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('ligaBasket01App:entrenadorUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.entrenador.id != null) {
                Entrenador.update($scope.entrenador, onSaveSuccess, onSaveError);
            } else {
                Entrenador.save($scope.entrenador, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);

'use strict';

angular.module('ligaBasket01App')
	.controller('user-managementDeleteController', function($scope, $uibModalInstance, entity, User) {

        $scope.user = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (login) {
            User.delete({login: login},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });

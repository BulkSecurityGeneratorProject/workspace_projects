'use strict';

angular.module('ligaBasket01App')
    .controller('JugadorController', function ($scope, $state, Jugador, ParseLinks) {

        $scope.jugadors = [];
        $scope.predicate = 'id';
        $scope.reverse = true;
        $scope.page = 0;
        $scope.loadAll = function() {
            Jugador.query({page: $scope.page, size: 20, sort: [$scope.predicate + ',' + ($scope.reverse ? 'asc' : 'desc'), 'id']}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                for (var i = 0; i < result.length; i++) {
                    $scope.jugadors.push(result[i]);
                }
            });
        };
        $scope.reset = function() {
            $scope.page = 0;
            $scope.jugadors = [];
            $scope.loadAll();
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.reset();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.jugador = {
                nombreJugador: null,
                fechaNacimiento: null,
                numCanastas: null,
                numAsistencias: null,
                numRebotes: null,
                posicion: null,
                id: null
            };
        };
    });

'use strict';

angular.module('ligaBasket01App')
    .factory('Socio', function ($resource, DateUtils) {
        return $resource('api/socios/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });

/**
 * Created by Yash on 12/4/2016.
 */
(function () {
    'use strict';

    angular.module('Computer')
        .service('getServices', ['$http', '$q', function ($http, $q) {
            this.getData = function () {
                 return $http.get('app/service/services.json').then(
                    function (response) {
                        return response.data;
                    }, function (error) {
                        return $q.reject;
                    }
                );
            }
        }]);
})();
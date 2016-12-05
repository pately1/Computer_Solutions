/**
 * Created by Yash on 12/4/2016.
 */
(function () {
    'use strict';

    angular.module('Computer')
        .service('locationService', ['$http', '$q', function ($http, $q) {
           this.getLocations = function () {
               return $http.get('app/service/locations.json').then(
                   function (response) {
                       return response.data;
                   }, function (error) {
                       $q.reject;
                   }
               )
           }
        }]);
})();
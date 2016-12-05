/**
 * Created by Yash on 12/4/2016.
 */
(function () {
    'use strict';

    angular.module('Computer')
        .controller('MainCtrl',['$scope', 'getServices', function ($scope, getServices) {
            console.log('Main Controller');

            getServices.getData().then(
                function (response) {
                    $scope.service_data = response;
                }, function (err) {
                    console.log(err);
                }
            );
        }]);
})();
/**
 * Created by Yash on 12/4/2016.
 */
(function () {
    'use strict';

    angular.module('Computer')
        .controller('ContactCtrl', ['$scope', 'locationService', function ($scope, locationService) {
            console.log("In Contact Controller");

            locationService.getLocations().then(
                function (response) {
                    $scope.locations = response;
                }, function (err) {
                    console.log(err);
                }
            )
        }]);
})();
/**
 * Created by Yash on 12/4/2016.
 */
(function () {
    'use strict';

    angular.module('Computer')
        .controller('ServiceCtrl', ['$scope','getServices' , function ($scope, getServices) {
            getServices.getData().then(
                function (response) {
                    $scope.serviceData = response;
                }, function (error) {
                    console.log(error);
                }
            )
        }]);
})();
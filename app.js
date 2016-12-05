/**
 * Created by Yash on 12/4/2016.
 */
(function() {
    'use strict';
    
    angular.module('Computer', ['ngRoute'])
        .config(["$routeProvider", function ($routeProvider) {
            $routeProvider
                .when('/main', {
                    templateUrl:'app/Home/home.html',
                    controller: 'MainCtrl'
                })
                .otherwise('/main')
        }])
})();
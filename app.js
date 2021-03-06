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
                .when('/about', {
                    templateUrl:'app/About/about.html',
                    controller: 'AboutCtrl'
                })
                .when('/services', {
                    templateUrl:'app/Services/services.html',
                    controller: 'ServiceCtrl'
                })
                .when('/contact', {
                    templateUrl:'app/Contact/contact.html',
                    controller: 'ContactCtrl'
                })
                .otherwise({redirectTo:'/main'})
        }])
})();
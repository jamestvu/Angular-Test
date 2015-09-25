
var angularTestApp = angular.module('angularTestApp', ['ui.router']);

angularTestApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'login.html'
        })

        .state('about', {

        });
});
//angular
//    .module('AngularTestApp',
//    ['ui.router', 'ui.bootstrap', 'LoginModule', 'NamePrintModule', 'Page1Module']);
//angular
//    .module('AngularTestApp')
//    .constant('applicationName', 'AngularTestApp')
//    .constant('versionNumber', '0.1');
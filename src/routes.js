(function () {
    function Routes($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'modules/login/login.html'
            })

            .state('tasks', {
                url: '/tasks',
                templateUrl: 'modules/tasks/tasks.html'
            });
    }
    angular
        .module('angularTestApp.Routes', [])
        .config(['$stateProvider', '$urlRouterProvider', Routes]);
})();

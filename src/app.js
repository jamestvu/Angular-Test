angular
    .module('angularTestApp',
    ['ui.router', 'angularTestApp.Routes', 'LoginModule', 'TasksModule']);

angular
    .module('angularTestApp')
    .constant('applicationName', 'AngularTestApp')
    .constant('versionNumber', '0.1');
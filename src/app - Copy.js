/**
 * Defines and configures all modules
 */
angular
    .module('angularTestApp',
    ['ui.router', 'LoginModule', 'NamePrintModule', 'Page1Module']);
angular
    .module('angularTestApp')
    .constant('applicationName', 'AngularTestApp')
    .constant('versionNumber', '0.1');
/**
 * Created by manjh on 2017/10/22.
 */
var app = angular.module('weatherApp', ['pascalprecht.translate'])
    .config(['$translateProvider', function ($translateProvider) {
        var lang = window.localStorage.lang || 'cn';
        $translateProvider.preferredLanguage(lang);
        $translateProvider.useStaticFilesLoader({
            prefix: '/i18n/',
            suffix: '.json'
        });
    }]);
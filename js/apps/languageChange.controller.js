/**
 * Created by manjh on 2017/10/22.
 */
angular.module('weatherApp').controller('languageController', ['$scope', '$translate', function ($scope, $translate) {
    $scope.languageChange = function (lang) {
        $translate.use(lang);
        window.localStorage.lang = lang;
        window.location.reload();
    };
}]);
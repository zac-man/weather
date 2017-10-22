/**
 * Created by manjh on 2017/10/22.
 */

angular.module('myApp').controller('LanguageSwitchingCtrl', ['$scope', '$translate', function (scope, $translate) {
    scope.switching = function(lang){
        $translate.use(lang);
        window.localStorage.lang = lang;
        window.location.reload();
    };
    scope.cur_lang = $translate.use();
}]);

angular.module("myApp").filter("T", ['$translate', function($translate) {
    return function(key) {
        if(key){
            return $translate.instant(key);
        }
    };
}]);

angular.module('myApp').factory('T', ['$translate', function($translate) {
    var T = {
        T:function(key) {
            if(key){
                return $translate.instant(key);
            }
            return key;
        }
    }
    return T;
}]);
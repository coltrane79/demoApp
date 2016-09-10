(function() {
    angular.module('demoApp')
        .controller('mainController', ['$scope', function($scope) {
            $scope.appTitle = "Business Manager";
            $scope.tab = 0;
            this.settab = function(tab) {
                $scope.tab = tab;
            };
        }]);
})();

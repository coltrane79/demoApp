(function() {
    angular.module('demoApp')
        .controller('mainController', ['$scope', function($scope) {
            $scope.message = "Angular is Up!";
            $scope.tab = 0;
            this.settab = function(tab) {
                $scope.tab = tab;
            };
        }]);
})();

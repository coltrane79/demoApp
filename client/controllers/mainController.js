(function() {
    angular.module('demoApp')
        .controller('mainController', ['$scope', function($scope) {
            $scope.message = "Angular is Up!"
        }]);
})();

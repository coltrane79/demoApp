(function() {
    angular.module('demoApp', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/daily', {
                    templateUrl: 'views/daily.html'
                })
                .when('/people', {
                    templateUrl: 'views/people.html'
                })
                .when('/ar', {
                    templateUrl: 'views/Customer.html'
                })
                .when('/ap', {
                    templateUrl: 'views/Vendor.html'
                });
        }]);
})();

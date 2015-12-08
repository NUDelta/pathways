angular.module('CollabPlan').controller('RequestsListCtrl', function ($scope, $meteor, $state) {
    $scope.requests = $meteor.collection(Requests);
    
    $scope.addRequest = function () {
        $scope.requests.push($scope.newRequest);
        $scope.newRequest = '';
    };
    
    $scope.remove = function (request) {
        $scope.requests.splice($scope.requests.indexOf(request), 1);
    };

    $scope.goToRequest = function (request) {
        $state.go('requestDetails', {requestId: request._id});
    }
});
angular.module('CollabPlan').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('requests', {
      url: '/requests',
      templateUrl: 'client/requests/views/requests-list.ng.html',
      controller: 'RequestsListCtrl',
    })
    .state('requestDetails', {
      url: '/requests/:requestId',
      templateUrl: 'client/requests/views/request-details.ng.html',
      controller: 'RequestDetailsCtrl'
    });

    $urlRouterProvider.otherwise("/requests");
});
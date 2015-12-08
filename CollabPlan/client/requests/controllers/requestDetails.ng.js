angular.module('CollabPlan').controller('RequestDetailsCtrl', function ($scope, $stateParams, $meteor, $rootScope) {
    // $scope.request = $meteor.object(Requests, $stateParams.requestId, false);
    $scope.requests = $meteor.collection(Requests);
    $scope.request = $scope.$meteorObject(Requests, $stateParams.requestId, false);

    if ($scope.request.suggestions == null) {
        $scope.request.suggestions = [];
    }

    var milestoneClean = function (milestone) {
        return (milestone.description == "" && milestone.motivation == "" && (milestone.tasks == null || milestone.tasks.length == 0));
    };

    var taskClean = function (task) {
        return (task.description == "" && task.url == "");
    };

    $scope.addNewMilestone = function () {
        if ($scope.request.milestones == null) {
            $scope.request.milestones = [];
        }
        if ($scope.request.milestones == 0 || !milestoneClean($scope.request.milestones[$scope.request.milestones.length - 1])) {
            $scope.request.milestones.push({
                description: "",
                motivation: "",
                tasks: [],
                type: "milestone"
            });
        }
    };

    $scope.addTask = function (milestone) {
        if (milestone.tasks == null) {
            milestone.tasks = [];
        }

        if (milestone.tasks.length == 0 || !taskClean(milestone.tasks[milestone.tasks.length - 1])) {
            milestone.tasks.push({
                description: "",
                url: "",
                type: "task"
            });
        }
    };

    $scope.logtoconsole = function () {
        console.log($scope.request);
    }

    $scope.save  = function () {
        console.log($scope.request.getRawObject());
        debugger;
        $scope.requests.push($scope.request.getRawObject());
        $scope.requests.remove($scope.request);
    };


  //   google.load('search', '1');
  // google.load("jquery", "1.4.2");
  // google.load("jqueryui", "1.7.2");
  //   function OnLoad() {
  //       debugger;
  //     var searchControl = new google.search.SearchControl();
  //     searchControl.addSearcher(new google.search.WebSearch());
  //     searchControl.draw(document.getElementById("searchcontrol"));
  //     searchControl.execute("VW GTI");
  //   }
  //   google.setOnLoadCallback(OnLoad);
});
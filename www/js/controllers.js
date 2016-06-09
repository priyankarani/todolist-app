angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicLoading, Task) {
  $scope.pageObj = {};
  Task.query().$promise
    .then(function(result) {
      console.log(result);
      $scope.tasks = result;
      $scope.potty = 'Priyanka Rani';
    })

  $scope.toggleDone = function(task) {
    $ionicLoading.show();
    task.is_done = !task.is_done;
    task.$update()
      .finally(function(result) {
        $ionicLoading.hide();
      })
  };
  
  $scope.addTask = function() {
    $ionicLoading.show();
    var task = new Task({'name': $scope.pageObj.newTask})
    task.$save()
      .then(function() {
        // We'll be here on successful save
        $scope.tasks.push(task);
        $scope.pageObj.newTask = '';
      }, function() {
        // We'll be here on error.
      })
      .finally(function(result) {
        $ionicLoading.hide();
      })
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

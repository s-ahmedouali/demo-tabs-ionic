angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('EventsCtrl', function($scope, Events) {
  Events.query({details: true},function(data) {
    $scope.events = data;
  });
  $scope.remove = function(event) {
   Events.delete({ id: event.id });
  }
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  console.log($stateParams.id );
  var entry = Events.get({ id: $stateParams.id }, function() {
    console.log(entry);
    $scope.event = entry;
  });
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

angular.module('starter.services', [])

.factory('Task', function($resource) {
  var Task = $resource('http://localhost:8000/tasks/:taskId/', {'taskId': '@id'}, {
    'update': {
      'method': 'PUT'
    }
  });

  return Task;
});

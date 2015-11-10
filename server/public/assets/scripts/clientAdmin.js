var app = angular.module('app',[]);
app.controller('AdminController', ['$scope', '$http', function ($scope, $http) {
  $scope.messages = [];
  $scope.getData = function () {
    $http.get('/data').then(function (response) {
        $scope.messages = response.data;
        //console.log($scope.messages);
    });
  };
  $scope.clickDelete = function (message) {
    console.log(message);
    $http.delete('/data/' + message.id).then(function (response) {
      console.log(response);
      $scope.getData();
    });
  };
  $scope.getData();
}]);





// var messages = [];
// $(document).ready(function () {
//   console.log('hi');
//   getData();
//   $('#postMessages').on('click', 'a', clickDelete);
// });
//
// function clickDelete() {
//   event.preventDefault();
//   console.log( $(this).parent().data('id'));
//
//   var idToDelete = {id: $(this).parent().data('id')};
//   $.ajax({
//     type: 'DELETE',
//     url: '/data',
//     data: idToDelete,
//     success: function (data) {
//       console.log('delete successful', data);
//       getData();
//     }
//   });
// }
// function getData() {
//   $.ajax({
//     type: 'GET',
//     url: '/data',
//     success: function (data) {
//       messages = data;
//       displayMessages();
//     }
//   });
// }
//
// function displayMessages() {
//   $('#postMessages').empty();
//   for (var i = 0; i < messages.length; i++) {
//     $('#postMessages').append('<div class="well col-md-5" data-id="' + messages[i].id + '"></div>');
//     var el$ = $('#postMessages').children().last();
//     el$.append('<p class="name">' + messages[i].name + ' says:</p>');
//     el$.append('<p>' + messages[i].message + '</p>');
//     el$.append('<a>Delete</a>');
//   }
// }

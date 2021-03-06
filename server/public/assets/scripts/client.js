var app = angular.module('app', []);
app.controller('MessageController', ['$scope', '$http', function ($scope, $http) {
  $scope.messages = [];
  $scope.message = {};
  $scope.clickSubmit = function (message) {
    $http.post('/data', message).then(function (response) {
      //console.log(response);
      $scope.getData();
    });
  };
  $scope.getData = function () {
    $http.get('/data').then(function (response) {
      $scope.messages = response.data;
      console.log($scope.messages);
    });
  };
  $scope.getData();
}]);




// var messages = [];
//
// $(document).ready(function () {
//   getData();
//   $('#submitMessageForm').on('submit',submitMessageForm);
// });
//
//
// function submitMessageForm() {
//   event.preventDefault();
//   //var d = new Date("2015-03-25");
//   var d = new Date().toJSON().slice(0,10)
//   var values = {};
//   $.each($(this).serializeArray(), function(i, field){
//      values[field.name] = field.value;
//   });
//   values.date = d;
//   $.ajax({
//     type: "POST",
//     url: "/data",
//     data: values,
//     success: function (data) {
//       console.log('POST complete');
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
//
//   for (var i = 0; i < messages.length; i++) {
//     $('#postMessages').append('<div class="well" data-id="' + messages[i].id + '"></div>');
//     var el$ = $('#postMessages').children().last();
//     el$.append('<p>'+ messages[i].date + '</p>');
//     el$.append('<p class="name">' + messages[i].name + ' says:</p>');
//     el$.append('<p>' + messages[i].message + '</p>');
//   }
// }

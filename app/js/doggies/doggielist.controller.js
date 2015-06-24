;(function (){

  'use strict';

  angular.module('Doggies')

  .controller('DoggieList', ['$scope', '$http', 'PARSE', function ($scope, $http, PARSE) {

    $scope.doggieList = [];

    $http.get(PARSE.URL + 'classes/Doggies', PARSE.CONFIG)

    .success(function (data) {

      $scope.doggieList = data.results;

    });

  }]);

}());

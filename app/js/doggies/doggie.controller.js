;(function (){

  'use strict';

  angular.module('Doggies')

  .controller('Doggie', ['$scope', '$http', 'PARSE', '$location',
    function ($scope, $http, PARSE, $location) {

      var Doggie = function (options) {
        this.name = options.name;
        this.age = options.age;
        this.breed = options.breed;
        this.personality = options.personality;
        this.startdate = options.startdate;
        this.enddate = options.enddate;
      };

      $scope.makeReservation = function (x) {
        var dog = new Doggie(x);
        $http.post(PARSE.URL + 'classes/Doggies', dog, PARSE.CONFIG)
        .success(function () {
          $location.path('/current');
          $scope.dog = {};
        });
      };

    }])

}());

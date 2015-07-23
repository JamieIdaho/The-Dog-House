;(function (){

  'use strict';

  angular.module('Doggies', ['ngRoute'])

  //setting up Parse
  .constant('PARSE', {

    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id' : '7Ze1KYcB0nrA2bAJKrTzeaJiI2CaKrJNostKQWoP',
        'X-Parse-REST-API-Key' : 'ZSxxHj7PAIKjZHS8RnM3KP36l0fVe78e2kMFMndC'
      }

    }
  })

  .config([ '$routeProvider', function ($routeProvider) {

    //home page
    $routeProvider.when('/', {
      controller: 'DoggieList',
      templateUrl: 'js/doggies/home.tpl.html'
    })

    //reservation page
    .when('/reservation', {
      controller: 'Doggie',
      templateUrl: 'js/doggies/reservation.tpl.html'
    })

    //about page
    .when('/about', {
      controller: 'Doggie',
      templateUrl: 'js/doggies/about.tpl.html'
    })

    //current status page
    .when('/current', {
      controller: 'DoggieList',
      templateUrl: 'js/doggies/current.tpl.html'
    });


  }]);

}());









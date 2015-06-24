;(function (){

  'use strict';

  angular.module('Doggies', [ngRoute])

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

    $routeProvider.when('/', {
      controller: 'Doggies',
      templateUrl: 'js/doggies/home.tpl.html'
    })

    .when('/reservation', {
      controller: 'Doggies',
      templateUrl: 'js/doggies/reservation.tpl.html'
    })

    .when('/about', {
      controller: 'Doggies',
      templateUrl: 'js/doggies/about.tpl.html'
    })

    .when('/current', {
      controller: 'DoggieList',
      templateUrl: 'js/doggies/current.tpl.html'
    });


  }])

}());









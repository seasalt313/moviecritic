(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


const app = angular.module('MovieCriticApp', []);

function Movie(title, date, overview) {
  this.title = title;
  this.date = date;
  this.overview = overview;
  this.cover = null;
  this.rating = null; //1-5

  return this;
}

app.controller('clickMoviesController', function($scope, MovieService){
 $scope.movies = MovieService.getMovies();

 $scope.starClicked = function(number, movie){
   console.log(number, movie);
   MovieService.starClicked(number, movie);
 }


})


app.factory('MovieService', function($http){
  const movies = [];

      $http.get('https://api.themoviedb.org/3/discover/movie?api_key=ea5bace395037bdfdb25e88d41560d45').then(function(response){

      angular.copy(response.data.results, movies)

    });

  return {
    getMovies(){
      return movies;
    },
    starClicked(num, movie){
      console.log(`${num} stars!`);
      console.log(`movie is: ${movie.title}`);
      movie.rating = num;
      console.log(`movie rating is : ${movie.rating}`);
      return movie.rating;

    },
  }
})

},{}]},{},[1]);

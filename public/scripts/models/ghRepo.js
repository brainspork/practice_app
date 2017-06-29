'use strict';
var app = app || {};


(function(module) {
  const repo = {};

  repo.all = [];

  repo.fetchData = (callback) => {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      headers: token,
      success: (data, message) => {
        repo.all = data.filter(item => item.description !== null);
        callback();
        console.log(message);
      }
    })
  }

  module.repo = repo;
}(app));

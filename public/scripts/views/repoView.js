'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  let render = Handlebars.compile($('#project-template').text());

  repoView.htmlInit = () =>{
    $('#repo-list').append(app.repo.all.map(render));
  }

  module.repoView = repoView;
}(app));

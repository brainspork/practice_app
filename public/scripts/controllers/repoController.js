'use strict';
var app = app || {};

(function(module) {
  const repoController = {};

  repoController.load = () => {
    app.repo.fetchData(app.repoView.htmlInit);
  }

  module.repoController = repoController;
}(app));

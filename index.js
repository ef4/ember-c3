"use strict";

module.exports = {
  name: "ember-c3",
  included: function(app) {
    this._super.included(app);
    
    app.import('node_modules/c3/c3.css');

    app.import('node_modules/c3/c3.js', {
      using: [
        { transformation: 'amd', as: 'c3'}
      ]
    });

    app.import('node_modules/d3/dist/d3.js', {
      using: [
        { transformation: 'amd', as: 'd3'}
      ]
    });
  
  }
};

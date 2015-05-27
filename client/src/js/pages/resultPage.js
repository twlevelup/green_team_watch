'use strict';

var Backbone = require('backbone'),
 $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');

var ResultView = PageView.extend({

  id: 'result',

  template: require('../../templates/pages/result.hbs'),

  buttonEvents: {
    right: 'goToHomePage',
    top: 'goToHomePage',
    bottom: 'goToHomePage',
    left: 'goToHomePage',
    face: 'goToHomePage'
  },

  goToHomePage: function() {
    global.App.navigate('', true);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
  
});

module.exports = ResultView;

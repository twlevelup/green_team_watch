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
    global.App.cumulative_score+=global.App.score;
    this.$el.html(this.template({
      score: global.App.score
    }));
    return this;
  }

});

module.exports = ResultView;

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
    if (global.App.score === 0) {
      global.App.score+=1;
    }
    global.App.cumulative_score+=global.App.score;

    var words = "STARS";
    if(global.App.score === 1){
      words = "STAR";
    }

    this.$el.html(this.template({
      score: global.App.score,
      words: words
    }));
    return this;
  }

});

module.exports = ResultView;

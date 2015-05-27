//result page
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

  // goToContacts: function() {
  //   global.App.navigate('contacts', true);
  // },

  // goToQuiz: function() {
  //   global.App.navigate('quiz', true);
  // },

  // scrollUp: function() {
  //   $('#watch-face').animate({scrollTop: '-=70px'});
  // },

  // scrollDown: function() {
  //   $('#watch-face').animate({scrollTop: '+=70px'});
  // },

  goToHomePage: function() {
    global.App.navigate('', true);
  },

  render: function() {
    global.App.score = 5;
    this.$el.html(this.template());
  
    global.App.accumulatedScore+=global.App.score;
    return this;

  }

});

module.exports = ResultView;

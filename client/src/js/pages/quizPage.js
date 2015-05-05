'use strict';

var Backbone = require('backbone'),
 $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');

var QuizView = PageView.extend({

  id: 'quiz',

  template: require('../../templates/pages/quiz.hbs'),

  buttonEvents: {
    right: 'goToHomePage',
    top: 'goToHomePage',
    bottom: 'goToHomePage',
    left: 'goToHomePage'
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

    this.$el.html(this.template());

    return this;

  }

});

module.exports = QuizView;

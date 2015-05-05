'use strict';

var Backbone = require('backbone'),
 $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');

var QuizView = PageView.extend({

  id: 'quiz',

  template: require('../../templates/pages/quiz.hbs'),

  buttonEvents: {
    right: 'goToResultPage',
    top: 'goToResultPage',
    bottom: 'goToResultPage',
    left: 'goToResultPage',
    face: 'goToResultPage'
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

  goToResultPage: function() {
    global.App.navigate('result', true);
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = QuizView;

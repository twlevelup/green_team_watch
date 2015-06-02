      'use strict';

var Backbone = require('backbone'),
 $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');

var QuizView = PageView.extend({

  id: 'quiz5',
  correct: null,

  // assign answer to have a default index
  index: 0,
  answers: ['rainbow lorikeet', 'emu', 'echidna', 'dingo'],
  animal: 'dingo',

  template: require('../../templates/pages/quiz.hbs'),

  buttonEvents: {
    right: 'scrollAnswerRight',
    left: 'scrollAnswerLeft',
    face: 'goToNextQuestion'
  },

  goToNextQuestion: function() {
    // If this is a dingo
    if ((this.index) === 3) {
      this.correct = true;
      this.render();
      global.App.score += 1;
      global.App.navigate('result', true);
      return;
    }

    this.correct = false;
    this.render();
    global.App.score += 0;
    global.App.navigate('result', false);
  },

  scrollAnswerLeft: function() {
    if ((this.index - 1) < 0) {
      return;
    }

    this.index -= 1;
    this.render();
  },

  scrollAnswerRight: function() {
    if ((this.index + 1) >= this.answers.length) {
      return;
    }

    this.index += 1;
    this.render();
  },

  render: function() {

    this.$el.html(this.template({
      answer: this.answers[this.index],
      animal: this.animal
    }));

    this.correct = null;
    return this;

  }

});

module.exports = QuizView;

'use strict';

var Backbone = require('backbone'),
 $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');

var QuizView = PageView.extend({

  id: 'quiz',
  correct: null,

  // assign answer to have a default index
  index: 0,
  answers: ['kangaroo', 'koala', 'black swan', 'echidna'],


  template: require('../../templates/pages/quiz.hbs'),

  buttonEvents: {
    right: 'scrollAnswerRight',
    top: 'goToResultPage',
    bottom: 'goToResultPage',
    left: 'scrollAnswerLeft',
    face: 'goToResultPage'
  },

  goToResultPage: function() {
    // If this is a kanagroo
    if ((this.index) === 0) {
      this.correct = true;
      this.render();
      return;
    }

    this.correct = false;
    this.render();

    // global.App.navigate('result', true);
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
      answer: this.answers[this.index]

      //answer
      //tick/cross
    }));
    if (this.correct !== null && this.correct === true) {
      this.$el.html(this.template($('tick')));
    } else if (this.correct !== null && this.correct === false) {
      this.$el.html(this.template($('cross')));
    }

    this.correct = null;
    return this;

  }

});

module.exports = QuizView;

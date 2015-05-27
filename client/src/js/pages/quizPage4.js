      'use strict';

var Backbone = require('backbone'),
 $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');

var QuizView = PageView.extend({

  id: 'quiz4',
  correct: null,

  // assign answer to have a default index
  index: 0,
  answers: ['dingo', 'sugar glider', 'crocodile', 'echidna'],
  animal: "crocodile",


  template: require('../../templates/pages/quiz.hbs'),

  buttonEvents: {
    right: 'scrollAnswerRight', 
    left: 'scrollAnswerLeft',
    face: 'goToNextQuestion'
  },

  goToNextQuestion: function() {
    // If this is a crocodile
    if ((this.index) === 2) {
      this.correct = true;
      this.render();
      global.App.score+=5;
      global.App.navigate('quiz5', true);
      return;
    }
    this.correct = false;
    this.render();  
    global.App.score+=1;
    global.App.navigate('quiz5', false);
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

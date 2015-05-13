'use strict';

var Backbone = require('backbone'),
 $ = require('jquery');

var answers = ['kangaroo', 'koala'];

Backbone.$ = $;

var PageView = require('../framework/page');

var QuizView = PageView.extend({

  id: 'quiz',
  size: 2,

  // assign answer to have a default index
  index: 0,

  template: require('../../templates/pages/quiz.hbs'),

  buttonEvents: {
    right: 'scrollAnswerRight',
    top: 'goToResultPage',
    bottom: 'goToResultPage',
    left: 'scrollAnswerLeft',
    face: 'goToResultPage'
  },

  goToResultPage: function() {
    global.App.navigate('result', true);
  },

  scrollAnswerLeft: function() {
    if ((this.index - 1) < 0) {
      return;
    }

    this.index -= 1;

    this.render();
  },

  scrollAnswerRight: function() {
    if ((this.index + 1) >= this.size) {
      return;
    }

    this.index += 1;
    this.render();
  },

  render: function() {

    this.$el.html(this.template({ answer: answers[this.index]}));

    return this;

  }

});

module.exports = QuizView;

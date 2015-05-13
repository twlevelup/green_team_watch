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

  goToResultPage: function() {
    global.App.navigate('result', true);
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = QuizView;

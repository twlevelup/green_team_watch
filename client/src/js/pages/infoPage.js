/**
 * Created by Aaron on 5-05-15.
 */
'use strict';

var Backbone = require('backbone'),
  $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');

var InfoView = PageView.extend({

    id: 'info',

    template: require('../../templates/pages/info.hbs'),

    buttonEvents: {
      right: 'goToQuizPage',
      face: 'goToQuizPage',
      left: 'goToQuizPage',
      top: 'goToQuizPage',
      bottom: 'goToQuizPage'
    },

    goToQuizPage: function() {
      global.App.router.navigate('quiz', true);
    },

    render: function() {

      this.$el.html(this.template());

      return this;

    }

  }
);

module.exports = InfoView;

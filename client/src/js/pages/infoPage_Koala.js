/**
 * Created by Aaron on 5-05-15.
 */
'use strict';

var Backbone = require('backbone'),
  $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');

var InfoView = PageView.extend({

  id: 'koala',

  template: require('../../templates/pages/info_Koala.hbs'),

  buttonEvents: {
      right: 'goToKangarooPage',
      face: 'goToQuizPage',
      left: 'goToKangarooPage',
      top: 'goToQuizPage',
      bottom: 'goToQuizPage'
    },

  goToQuizPage: function() {
      global.App.navigate('quiz', true);
    },

  goToKangarooPage: function() {
      global.App.navigate('kangaroo', true);
    },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

}
);

module.exports = InfoView;

/**
 * Created by Aaron on 5-05-15.
 */
'use strict';

var Backbone = require('backbone'),
  $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');

var InfoView = PageView.extend({

  id: 'kangaroo',

  template: require('../../templates/pages/info_Kangaroo.hbs'),

  buttonEvents: {
      right: 'goToKoalaPage',
      face: 'goToQuizPage',
      left: 'goToKoalaPage',
      top: 'goToQuizPage',
      bottom: 'goToQuizPage'
    },

  goToQuizPage: function() {
      global.App.navigate('quiz', true);
    },

  goToKoalaPage: function() {
      global.App.navigate('koala', true);
    },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

}
);

module.exports = InfoView;

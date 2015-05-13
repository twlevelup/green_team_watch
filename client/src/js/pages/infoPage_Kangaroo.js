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
      face: 'goToKoalaPage',
      left: 'goToKoalaPage',
      top: 'goToKoalaPage',
      bottom: 'goToKoalaPage'
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

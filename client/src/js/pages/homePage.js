'use strict';

var PageView = require('../framework/page');

var homeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToInfo',
    top: 'goToInfo',
    bottom: 'goToInfo',
    left: 'goToInfo',
    face: 'goToInfo'
  },

  goToInfo: function() {
    global.App.navigate('info', true);
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = homeScreen;

'use strict';

var PageView = require('../framework/page');

var homeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToHelp',
    top: 'goToHelp',
    bottom: 'goToHelp',
    left: 'goToHelp',
    face: 'goToHelp'
  },

  goToHelp: function() {
    global.App.navigate('help', true);
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = homeScreen;

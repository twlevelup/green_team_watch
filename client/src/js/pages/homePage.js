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
    if (global.App.score === undefined) {
      global.App.score = 0;
    }

    this.$el.html(this.template({score:global.App.score}));

    return this;
  }

});

module.exports = homeScreen;

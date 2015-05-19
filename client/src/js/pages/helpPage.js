'use strict';

var PageView = require('../framework/page');

var HelpView = PageView.extend({

  id: 'help',

  template: require('../../templates/pages/help.hbs'),

  buttonEvents: {
    right: 'goToInfo',

    // top: 'goToInfo',
    // bottom: 'goToInfo',
    left: 'goToHome'
  },

  goToInfo: function() {
    global.App.navigate('info', true);
  },

  goToHome: function() {
    global.App.navigate('', true);
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = HelpView;

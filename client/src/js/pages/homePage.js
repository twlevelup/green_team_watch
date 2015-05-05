'use strict';

var PageView = require('../framework/page');

var homeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToInfo',
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'goToInfo'
  },

  goToContacts: function() {
    global.App.navigate('contacts', true);
  },

  goToInfo: function() {
    global.App.navigate('info', true);
  },

  goToQuiz: function() {
    global.App.navigate('quiz', true);
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = homeScreen;

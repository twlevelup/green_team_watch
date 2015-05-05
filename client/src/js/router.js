'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  QuizPage = require('./pages/quizPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  quizPage = new QuizPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    quiz: 'quiz'
  },

  home: function() {
    this.renderView(homePage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  },

  quiz: function() {
    this.renderView(quizPage);
  }

});

module.exports = AppRouter;

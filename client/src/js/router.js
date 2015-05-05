'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  QuizPage = require('./pages/quizPage'),
  ResultPage = require('./pages/resultPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  quizPage = new QuizPage(),
  resultPage = new ResultPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    quiz: 'quiz',
    result: 'result',
    info: 'info'
  },

  home: function() {
    this.renderView(homePage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  },

  quiz: function() {
    this.renderView(quizPage);
  },

  result: function() {
    this.renderView(resultPage);
  },

  info: function() {
    this.renderView(infoPage);
  }

});

module.exports = AppRouter;

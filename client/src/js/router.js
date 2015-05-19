'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  QuizPage = require('./pages/quizPage'),
  InfoPage = require('./pages/infoPage'),
  ResultPage = require('./pages/resultPage'),
  HelpPage = require('./pages/helpPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  quizPage = new QuizPage(),
  infoPage = new InfoPage(),
  resultPage = new ResultPage(),
  helpPage = new HelpPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    quiz: 'quiz',
    result: 'result',
    info: 'info',
    help: 'help',

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
  },
  
  help: function() {
    this.renderView(helpPage);
  },

});

module.exports = AppRouter;

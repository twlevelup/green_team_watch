'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  QuizPage = require('./pages/quizPage'),
  KangarooPage = require('./pages/infoPage_Kangaroo'),
  KoalaPage = require('./pages/infoPage_Koala'),
  ResultPage = require('./pages/resultPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  quizPage = new QuizPage(),
  kangarooPage = new KangarooPage(),
  koalaPage = new KoalaPage(),
  resultPage = new ResultPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    quiz: 'quiz',
    result: 'result',
    kangaroo: 'kangaroo',
    koala: 'koala'

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

  kangaroo: function() {
    this.renderView(kangarooPage);
  },

  koala: function() {
    this.renderView(koalaPage);
  }

});

module.exports = AppRouter;

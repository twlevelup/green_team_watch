'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  QuizPage = require('./pages/quizPage'),
  QuizPage2 = require('./pages/quizPage2'),
  QuizPage3 = require('./pages/quizPage3'),
  QuizPage4 = require('./pages/quizPage4'),
  QuizPage5 = require('./pages/quizPage5'),
  InfoPage = require('./pages/infoPage'),
  ResultPage = require('./pages/resultPage'),
  HelpPage = require('./pages/helpPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  quizPage = new QuizPage(),
  quizPage2 = new QuizPage2(),
  quizPage3 = new QuizPage3(),
  quizPage4 = new QuizPage4(),
  quizPage5 = new QuizPage5(),
  infoPage = new InfoPage(),
  resultPage = new ResultPage(),
  helpPage = new HelpPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    quiz: 'quiz',
    quiz2: 'quiz2',
    quiz3: 'quiz3',
    quiz4: 'quiz4',
    quiz5: 'quiz5',
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

  quiz2: function(){
    this.renderView(quizPage2);
  },

  quiz3: function(){
    this.renderView(quizPage3);
  },

  quiz4: function() {
    this.renderView(quizPage4);
  },

  quiz5: function() {
    this.renderView(quizPage5);
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

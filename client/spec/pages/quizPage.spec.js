'use strict';

var QuizPage = require('../../src/js/pages/quizPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Quiz Page', function() {

  var quizPage;

  beforeEach(function () {
    quizPage = new QuizPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      quizPage.setButtonEvents();
    });

    describe('right', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the results page', function () {

        quizPage.trigger('right');

        expect(global.App.navigate).toHaveBeenCalled();
      });

    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      quizPage.render();
      expect(quizPage.el.innerHTML).toContain('<div>Quiz</div>');
    });

    it('returns the view object', function() {
      expect(quizPage.render()).toEqual(quizPage);
    });

  });

});

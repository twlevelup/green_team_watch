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

      it('should take the user to the result page', function () {

        quizPage.trigger('right');

        expect(global.App.navigate).toHaveBeenCalledWith('result', true);
      });

    });    

    describe('top', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the result page', function () {

        quizPage.trigger('top');

        expect(global.App.navigate).toHaveBeenCalledWith('result', true);
      });

    });    

    describe('left', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the result page', function () {

        quizPage.trigger('left');

        expect(global.App.navigate).toHaveBeenCalledWith('result', true);
      });

    });

        describe('bottom', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the result page', function () {

        quizPage.trigger('bottom');

        expect(global.App.navigate).toHaveBeenCalledWith('result', true);
      });

    });

        describe('face', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the result page', function () {

        quizPage.trigger('face');

        expect(global.App.navigate).toHaveBeenCalledWith('result', true);
      });

    });

  });


  describe('rendering', function () {

    it('should produce the correct HTML <div>quiz</div>', function () {
      quizPage.render();
      expect(quizPage.el.innerHTML).toContain('<div>Quiz</div>');
    });


   it('should produce the correct image of a Kangaroo.', function () {
      quizPage.render();
      expect(quizPage.el.innerHTML).toContain('/images/kangaroo.png');
    });

    it('should produce the correct HTML text <p>kangaroo</p>', function () {
      quizPage.render();
      expect(quizPage.el.innerHTML).toContain('<p>Kangaroo</p>');
    });

    it('returns the view object', function() {
      expect(quizPage.render()).toEqual(quizPage);
    });

  });

});

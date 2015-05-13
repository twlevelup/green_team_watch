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
        quizPage.size = 2;
      });

      describe('when index < size', function(){

        it('should add 1 to the answer index', function () {

          quizPage.index = 0;
          quizPage.trigger('right');

          expect(quizPage.index).toEqual(1);
        });

      });
      
      describe('when index = size', function(){

        it('should not add 1 to the answer index', function () {

          quizPage.index = 1;
          quizPage.trigger('right');

          expect(quizPage.index).toEqual(1);
        });    

      });

    }); 

    describe('left', function () {

      describe('when index > 0', function(){

        it('should take 1 from the answer index', function () {

          quizPage.index = 1;
          quizPage.trigger('left');

          expect(quizPage.index).toEqual(0);
        });

      });
      
      describe('when index <= 0', function(){

        it('should not take 1 from the answer index', function () {

          quizPage.index = 0;
          quizPage.trigger('left');

          expect(quizPage.index).toEqual(0);
        });    

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

    it('should produce the correct HTML', function () {
      quizPage.render();
      expect(quizPage.el.innerHTML).toContain('<div>What animal is this?</div>');
    });

    it('returns the view object', function() {
      expect(quizPage.render()).toEqual(quizPage);
    });

  });

});

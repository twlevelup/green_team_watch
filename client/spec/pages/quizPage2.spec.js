'use strict';

var QuizPage = require('../../src/js/pages/quizPage2'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Quiz Page - Question 2', function() {

  var quizPage;

  beforeEach(function () {
    quizPage = new QuizPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      quizPage.setButtonEvents();
    });

    describe('right', function () {

      describe('when index < size', function(){

        it('should add 1 to the answer index', function () {

          quizPage.index = 0;
          quizPage.trigger('right');

          expect(quizPage.index).toEqual(1);
        });

      });
      
      describe('when index = size', function(){

        it('should not add 1 to the answer index', function () {

          quizPage.index = 3;
          quizPage.trigger('right');

          expect(quizPage.index).toEqual(3);
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

    describe('face', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the result page on correct answer', function () { 
        global.App.score = 0;
        quizPage.index = 0;
        quizPage.trigger('face');
        expect(global.App.score).toEqual(1);
        expect(global.App.navigate).toHaveBeenCalledWith('quiz3', true);
      });

    });

    describe('face', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the result page on incorrect answer', function () { 
        global.App.score = 0;
        quizPage.index = 1;
        quizPage.trigger('face');
        expect(global.App.score).toEqual(0);
        expect(global.App.navigate).toHaveBeenCalledWith('quiz3', false);
      });

    });

  });


  describe('rendering', function () {


    describe('generic stuff', function () {
      it('should produce the correct HTML <div>quiz</div>', function () {
        quizPage.render();
        expect(quizPage.el.innerHTML).toContain('<div>What animal is this?</div>');
      });

      it('returns the view object', function() {
        expect(quizPage.render()).toEqual(quizPage);
      });

    });

   it('should produce the correct image of a koala.', function () {
      quizPage.render();
      expect(quizPage.el.innerHTML).toContain('/images/koala.png');
    });

    it('should produce the correct HTML text <p>koala</p>', function () {
      quizPage.render();
      expect(quizPage.el.innerHTML).toContain('koala');
    });



  });

});

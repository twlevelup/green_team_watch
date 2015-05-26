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

    // describe('top', function () {

    //   beforeEach(function () {
    //     spyOn(global.App, 'navigate');
    //   });

    //   it('should take the user to the result page', function () {

    //     quizPage.trigger('top');

    //     expect(global.App.navigate).toHaveBeenCalledWith('result', true);
    //   });

    // });    

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


    describe('generic stuff', function () {
      it('should produce the correct HTML <div>quiz</div>', function () {
        quizPage.render();
        expect(quizPage.el.innerHTML).toContain('<div>What animal is this?</div>');
      });

      it('returns the view object', function() {
        expect(quizPage.render()).toEqual(quizPage);
      });

    });

    describe('when they have not answered a question at all', function () {

      beforeEach(function () {
        quizPage.correct = null;
      });

      it('should not have a tick', function () {
        quizPage.render();
        expect(quizPage.el.innerHTML).not.toContain('/images/tick.png');        
      });

      it('should not have a cross', function () {
        quizPage.render();
        expect(quizPage.el.innerHTML).not.toContain('/images/cross.png');        
      });

    });

    describe('when they have answered a question correctly', function () {

      beforeEach(function () {
        quizPage.correct = true;
      });

      it('should have a tick', function () {
        quizPage.render();
        expect(quizPage.el.innerHTML).toContain('/images/tick.png');        
      });

    });

    describe('when they have answered a question incorrectly', function () {

      beforeEach(function () {
        quizPage.correct = false;
      });

      it('should have a tick', function () {
        quizPage.render();
        expect(quizPage.el.innerHTML).toContain('/images/cross.png');        
      });

    });

   it('should produce the correct image of a Kangaroo.', function () {
      quizPage.render();
      expect(quizPage.el.innerHTML).toContain('/images/kangaroo.png');
    });

    it('should produce the correct HTML text <p>kangaroo</p>', function () {
      quizPage.render();
      expect(quizPage.el.innerHTML).toContain('kangaroo');
    });



  });

});

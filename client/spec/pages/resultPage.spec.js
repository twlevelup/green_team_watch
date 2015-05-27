'use strict';

var ResultPage = require('../../src/js/pages/resultPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Result Page', function() {

  var resultPage;

  beforeEach(function () {
    resultPage = new ResultPage();
  });


  describe('button event handlers', function () {

    beforeEach(function () {
      resultPage.setButtonEvents();
    });

    describe('right', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the home page', function () {

        resultPage.trigger('right');

        expect(global.App.navigate).toHaveBeenCalledWith('', true);
      });

    });    

    describe('top', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the home page', function () {

        resultPage.trigger('top');

        expect(global.App.navigate).toHaveBeenCalledWith('', true);
      });

    });    

    describe('left', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the home page', function () {

        resultPage.trigger('left');

        expect(global.App.navigate).toHaveBeenCalledWith('', true);
      });

    });

        describe('bottom', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      }); 

      it('should take the user to the home page', function () {

        resultPage.trigger('bottom');

        expect(global.App.navigate).toHaveBeenCalledWith('', true);
      });

    });

        describe('face', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the home page', function () {

        resultPage.trigger('face');

        expect(global.App.navigate).toHaveBeenCalledWith('', true);
      });

    });

  });

  describe('rendering', function () {

    it('should produce the "WELL DONE!!"', function () {
      resultPage.render();
      expect(resultPage.el.innerHTML).toContain('WELL DONE!!');
    });

    it('should produce the correct image of a coin.', function () {
      resultPage.render();
      expect(resultPage.el.innerHTML).toContain('/images/MoneyCoin.gif');
    });

    it('should produce the "YOU SCORED"', function () {
      resultPage.render();
      expect(resultPage.el.innerHTML).toContain('YOU SCORED');
    });

    it('returns the view object', function() {
      expect(resultPage.render()).toEqual(resultPage);
    });

  });

});

'use strict';

var HomePage = require('../../src/js/pages/homePage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Home Page', function() {

  var homePage;

  beforeEach(function () {
    homePage = new HomePage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      homePage.setButtonEvents();
    });

    describe('right', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the help page', function () {

        homePage.trigger('right');

        expect(global.App.navigate).toHaveBeenCalledWith('help', true);
      });

    });    

    describe('top', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the help page', function () {

        homePage.trigger('top');

        expect(global.App.navigate).toHaveBeenCalledWith('help', true);
      });

    });    

    describe('left', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the help page', function () {

        homePage.trigger('left');

        expect(global.App.navigate).toHaveBeenCalledWith('help', true);
      });

    });

        describe('bottom', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the help page', function () {

        homePage.trigger('bottom');

        expect(global.App.navigate).toHaveBeenCalledWith('help', true);

      });

    });

        describe('face', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the help page', function () {

        homePage.trigger('face');


        expect(global.App.navigate).toHaveBeenCalledWith('help', true);

      });

    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      homePage.render();
      expect(homePage.el.innerHTML).toContain('<div>Press any button!</div>');
    });

    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });

    it('should return view object of score zero when no global score is defined', function() {
      homePage.render();
      expect(homePage.el.innerHTML).toContain('<center><font size="+2" color="000080"> 0</font></center>');
    });

    it('should return view object of score 10 when no global score is 10', function() {
      homePage.render();
      expect(homePage.el.innerHTML).toContain('<center><font size="+2" color="000080"> ' + global.App.accumulatedScore +'</font></center>');
    });

  });

});

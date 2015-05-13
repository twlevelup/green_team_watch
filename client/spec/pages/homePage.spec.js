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

      it('should take the user to the info page', function () {

        homePage.trigger('right');

        expect(global.App.navigate).toHaveBeenCalledWith('info', true);
      });

    });    

    describe('top', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the info page', function () {

        homePage.trigger('top');

        expect(global.App.navigate).toHaveBeenCalledWith('info', true);
      });

    });    

    describe('left', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the info page', function () {

        homePage.trigger('left');

        expect(global.App.navigate).toHaveBeenCalledWith('info', true);
      });

    });

        describe('bottom', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the info page', function () {

        homePage.trigger('bottom');

        expect(global.App.navigate).toHaveBeenCalledWith('info', true);

      });

    });

        describe('face', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the info page', function () {

        homePage.trigger('face');


        expect(global.App.navigate).toHaveBeenCalledWith('info', true);

      });

    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      homePage.render();
      expect(homePage.el.innerHTML).toContain('<div class="center">Press any key to start the game!</div>');
    });

    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });

  });

});

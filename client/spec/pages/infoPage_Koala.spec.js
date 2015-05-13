'use strict';

var InfoPage = require('../../src/js/pages/infoPage_Koala'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Koala Info Page', function() {

  var infoPage;

  beforeEach(function () {
    infoPage = new InfoPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      infoPage.setButtonEvents();
    });

    describe('right', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('right button should take the user to the quiz page', function () {

        infoPage.trigger('right');

        expect(global.App.navigate).toHaveBeenCalled();
      });

    });


  describe('top', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('top button should take the user to the quiz page', function () {

        infoPage.trigger('top');

        expect(global.App.navigate).toHaveBeenCalled();
      });

    });

    describe('left', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('left button should take the user to the quiz page', function () {

        infoPage.trigger('left');

        expect(global.App.navigate).toHaveBeenCalled();
      });

    });


    describe('bottom', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('bottom should take the user to the quiz page', function () {

        infoPage.trigger('bottom');

        expect(global.App.navigate).toHaveBeenCalled();
      });

    });

    describe('face', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('face button should take the user to the quiz page', function () {

        infoPage.trigger('face');

        expect(global.App.navigate).toHaveBeenCalled();
      });

    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      infoPage.render();
      expect(infoPage.el.innerHTML).toContain('<p>Koala</p>');
    });

    it('returns the view object', function() {
      expect(infoPage.render()).toEqual(infoPage);
    });

  });

});

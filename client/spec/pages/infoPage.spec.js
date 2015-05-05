'use strict';

var InfoPage = require('../../src/js/pages/infoPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Info Page', function() {

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

      it('should take the user to the info page', function () {

        infoPage.trigger('right');

        expect(global.App.navigate).toHaveBeenCalled();
      });

    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      infoPage.render();
      expect(infoPage.el.innerHTML).toContain('<p>Kangaroo</p>');
    });

    it('returns the view object', function() {
      expect(infoPage.render()).toEqual(infoPage);
    });

  });

});

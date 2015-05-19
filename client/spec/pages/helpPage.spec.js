'use strict';

var HelpPage = require('../../src/js/pages/helpPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Help Page', function() {

  var helpPage;

  beforeEach(function () {
    helpPage = new HelpPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      helpPage.setButtonEvents();
    });

    describe('right', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the info page', function () {

        helpPage.trigger('right');

        expect(global.App.navigate).toHaveBeenCalledWith('info', true);
      });

    });    

    // describe('top', function () {

    //   beforeEach(function () {
    //     spyOn(global.App, 'navigate');
    //   });

    //   it('should scroll up', function () {

    //     helpPage.trigger('top');

    //     expect(global.App.navigate).toHaveBeenCalledWith('info', true);
    //   });

    // });    

    describe('left', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user back to the home page', function () {

        helpPage.trigger('left');

        expect(global.App.navigate).toHaveBeenCalledWith('', true);
      });

    });

    //     describe('bottom', function () {

    //   beforeEach(function () {
    //     spyOn(global.App, 'navigate');
    //   });

    //   it('should scroll down', function () {

    //     helpPage.trigger('bottom');

    //     expect(global.App.navigate).toHaveBeenCalledWith('info', true);

    //   });

    // });
/**
        describe('face', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should have no function', function () {

        helpPage.trigger('face');


        expect(global.App.navigate).toHaveBeenCalledWith(true);

      });

    }); */

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      helpPage.render();
      expect(helpPage.el.innerHTML).toContain('<p>How to Play:</p>');
    });

    it('returns the view object', function() {
      expect(helpPage.render()).toEqual(helpPage);
    });

  });

});

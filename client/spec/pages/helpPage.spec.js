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
      expect(helpPage.el.innerHTML).toContain('How to play:');
    });

    it('should contain selectImage button.', function () {
      helpPage.render();
      expect(helpPage.el.innerHTML).toContain('/images/selectButton.png');
    });

    it('should produce the correct image of a left button.', function () {
      helpPage.render();
      expect(helpPage.el.innerHTML).toContain('/images/leftButton.png');
    });

    it('should produce the correct image of a right button.', function () {
      helpPage.render();
      expect(helpPage.el.innerHTML).toContain('/images/rightButton.png');
    });

    it('should contain "back"', function () {
      helpPage.render();
      expect(helpPage.el.innerHTML).toContain('back');
    });

    it('should contain "forward"', function () {
      helpPage.render();
      expect(helpPage.el.innerHTML).toContain('forward');
    });

    it('returns the view object', function() {
      expect(helpPage.render()).toEqual(helpPage);
    });

  });

});

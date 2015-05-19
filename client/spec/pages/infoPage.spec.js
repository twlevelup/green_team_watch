'use strict';

var InfoPage = require('../../src/js/pages/infoPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Kangaroo Info Page', function() {

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

      it('right button should take the user to the Koala page', function () {
        infoPage.render();
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('right');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('right');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('right');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('right');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('right');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('right');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('right');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('right');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('right');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('right');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('quiz', true);
      });

    });

    describe('left', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('right button should take the user to the Koala page', function () {
        infoPage.render();
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('left');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('left');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('left');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('left');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('left');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('left');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('left');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('left');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('left');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('left');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
        infoPage.trigger('left');
        expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
       // expect(global.App.navigate).toHaveBeenCalledWith('quiz', true);
      });

    });

    // describe('top', function () {

    //   beforeEach(function () {
    //     spyOn(global.App, 'navigate');
    //   });

    //   it('for future button use', function () {

    //   });

    // });

    // describe('bottom', function () {

    //   beforeEach(function () {
    //     spyOn(global.App, 'navigate');
    //   });

    //   it('for future button use', function () {
   
    //   });

    // });

    // describe('face', function () {

    //   beforeEach(function () {
    //     spyOn(global.App, 'navigate');
    //   });

    //   it('for future button use', function () {
    //   });

    // });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      infoPage.render();
      expect(infoPage.el.innerHTML).toContain(infoPage.names[infoPage.index]);
    });

    it('returns the view object', function() {
      expect(infoPage.render()).toEqual(infoPage);
    });

  });

});

});

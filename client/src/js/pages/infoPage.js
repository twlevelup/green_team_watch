/**
 * Created by Aaron on 5-05-15.
 */
'use strict';

var Backbone = require('backbone'),
  $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');

// var images = ['images/kangaroo.png', 'images/koala.png'];
// var names = ['kangaroo', 'koala'];

var InfoView = PageView.extend({

  id: 'info',
  index: 0,
  images: ['images/kangaroo.png', 'images/koala.png', 'images/echidna.png', 'images/blackSwan.png', 'images/platypus.png', 'images/emu.png', 'images/sugarGlider.png', 'images/rainbowLorikeet.png', 'images/dingo.png', 'images/crocodile.png'],
  names: ['kangaroo', 'koala', 'Echidna', 'Black Swan', 'Platypus', 'Emu', 'Sugar Glider', 'Rainbow Lorikeet', 'Dingo', 'Crocodile'],

  template: require('../../templates/pages/info.hbs'),

  buttonEvents: {
      right: 'goToNextAnimal',
      face: '',
      left: 'goToPreviousAnimal',
      top: '',
      bottom: ''
    },

  goToNextAnimal: function() {
      if (this.index >= this.images.length - 1) {
        this.index = 0;
        this.goToNextPage();
      } else {
        this.index += 1;
        this.render();
      }
    },

  goToPreviousAnimal: function() {
      if (this.index <= 0) {
        this.index = 0;
      } else {
        this.index -= 1;
        this.render();
      }
    },

  goToNextPage: function() {
    global.App.navigate('quiz', true);
  },

  render: function() {

    this.$el.html(this.template({image: this.images[this.index], name: this.names[this.index]}));

    return this;

  }

}
);

module.exports = InfoView;

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
  images: ['images/kangaroo.png', 'images/koala.png'],
  names: ['kangaroo', 'koala'],

  template: require('../../templates/pages/info.hbs'),

  buttonEvents: {
      right: 'goToNextAnimal',
      face: 'goToNextAnimal',
      left: 'goToNextAnimal',
      top: 'goToNextAnimal',
      bottom: 'goToNextAnimal'
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

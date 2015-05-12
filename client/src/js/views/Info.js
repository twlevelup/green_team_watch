/**
 * Created by Aaron on 5-05-15.
 */

'use strict';

var InfoView = Backbone.View.extend({

  tagName: 'li',

  template: require('../../templates/pages/info_Kangaroo.hbs'),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});

module.exports = InfoView;

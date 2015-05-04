var models = require('../app/models');

module.exports = {
  index: function(req, res) {
    models.Contact.find({}, function(err, data) {
      res.json(data);
    });
  },

  getById: function(req, res) {
    models.Contact.find({ _id: req.params.id }, function(err, contact) {
      if (err) {
        res.json({error: 'Contact not found.'});
      } else {
        res.json(contact);
      }
    });
  },

  add: function(req, res) {
    var newContact = new models.Contact(req.body);
    newContact.save(function(err, contact) {
      if (err) {
        res.json({error: 'Error adding contact.'});
      } else {
        res.json(contact);
      }
    });
  },

  delete: function(req, res) {
    models.Contact.findOne({ _id: req.params.id }, function(err, contact) {
      if (err) {
        res.json({error: 'Contact not found.'});
      } else {
        contact.remove(function(err, contact){
          res.json(200, {status: 'Success'});
        })
      }
    });
  }
};

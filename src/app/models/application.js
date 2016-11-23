import Backbone from 'backbone';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';

const Application = Backbone.Model.extend({
  // This model represents the overall application.
  initialize: function(options) {
    this.contact = new Contact();
    var contacts = options.contacts.map(function(attrs) {
      return new Contact(attrs);
    });
    this.rolodex = new Rolodex(contacts);
  }
});

export default Application;

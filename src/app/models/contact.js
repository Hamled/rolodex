import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "Unknown",
    email: "example@example.com",
    phone: "1-800-555-1234"
  }
});

export default Contact;

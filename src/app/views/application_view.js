import Backbone from 'backbone';
import RolodexView from 'app/views/rolodex_view';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  events: {
    'click .btn-save': 'onSave',
    'click .btn-cancel': 'onCancel'
  },

  onSave: function(e) {
    var contactAttrs = {
      name: this.$('.contact-form input[name="name"]').val(),
      email: this.$('.contact-form input[name="email"]').val(),
      phone: this.$('.contact-form input[name="phone"]').val()
    };

    this.model.rolodex.add(contactAttrs);
    this.clearForm();
  },

  onCancel: function(e) {
    this.clearForm();
  },

  clearForm: function() {
    this.$('.contact-form input').val('');
  },

  render: function() {
    const rolodexView = new RolodexView({
      model: this.model.rolodex,
      el: this.$('main')
    });
    rolodexView.render();

    return this;
  }
});

export default ApplicationView;

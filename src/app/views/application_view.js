import Backbone from 'backbone';
import RolodexView from 'app/views/rolodex_view';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
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

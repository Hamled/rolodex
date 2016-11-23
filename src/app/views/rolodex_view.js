import Backbone from 'backbone';
import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    // Clear out the list first
    // we'll add all of the cards back afterwards
    const cardList = this.$('#contact-cards');
    cardList.empty();

    const self = this;
    this.model.forEach(function(contact) {
      const card = new ContactView({
        model: contact
      });

      cardList.append(card.render().$el);
    });
  }
});

export default RolodexView;

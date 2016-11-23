import _ from 'underscore';
import Backbone from 'backbone';
import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function() {
    this.detailsTemplate = _.template(Backbone.$('#tmpl-contact-details').html());
    this.detailsModal = this.$('#contact-details');
    this.detailsModal.hide(); // Modal starts hidden

    this.listenTo(this.model, 'update', this.render);
  },

  showCard: function(card) {
    const cardDetails = this.detailsTemplate(card.model.attributes);
    this.detailsModal.html(cardDetails);
    this.detailsModal.show();
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
      self.listenTo(card, 'select', self.showCard);

      cardList.append(card.render().$el);
    });
  }
});

export default RolodexView;

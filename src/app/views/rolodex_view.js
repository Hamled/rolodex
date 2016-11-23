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

  events: {
    'click': 'onClick'
  },

  onClick: function(e) {
    // There are many ways to implement the logic for hiding a modal.
    // In this case I've handled the possibility of clicking anywhere on
    // the RolodexView's controlled area (the whole right side of the page)
    // and if we didn't click specifically on the modal, then we consider
    // that as choosing to close it.
    // Another popular way to implement this is to overlay a shaded,
    // transparent div on top of the entire page, and then display the modal
    // on top of it. When the overlay div is clicked upon, then the modal
    // goes away.

    // The actual DOM element for the modal
    const modalElement = this.detailsModal[0];
    const clickedOnModal = (modalElement == e.target ||
                            Backbone.$.contains(modalElement, e.target));

    if(this.detailsModal.is(':visible') && !clickedOnModal) {
      this.detailsModal.hide();
    }
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

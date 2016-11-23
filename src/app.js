import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var application = new Application({
  contacts: [
    {
      name: "Charles",
      email: "charles@example.com",
      phone: "206-555-1234"
    },
    {
      name: "Kari",
      email: "kari@example.com",
      phone: "206-555-1236"
    },
    {
      name: "Dan",
      email: "dan@example.com",
      phone: "206-555-1235"
    },
    {
      name: "Jamie",
      email: "jamie@example.com",
      phone: "206-555-1238"
    },
    {
      name: "Chris",
      email: "chris@example.com",
      phone: "206-555-1237"
    }
  ]
});

var appView = new ApplicationView({
  el: '#application',
  model: application
});

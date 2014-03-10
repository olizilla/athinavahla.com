var keystone = require('keystone');
var hbs = require('express3-handlebars')

keystone.init({

  'name': 'Athina Vahla',

  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': 'public',

  'views': 'templates/views',
  'custom engine': hbs.create({extname:".hbs", defaultLayout:'main', layoutsDir:"templates/layouts/", partialsDir:"templates/partials/" }).engine,
  'view engine': 'hbs',

  'auto update': true,
  'mongo': process.env.MONGO_URI || 'mongodb://localhost/athinavahla',

  'session': false,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'dont tell anyone'

});

require('./models');

keystone.set('routes', require('./routes'));

process.title = 'athinavahla'

keystone.start();
var keystone = require('keystone'),
//  middleware = require('./middleware'),
  importRoutes = keystone.importer(__dirname);

// Common Middleware
//keystone.pre('routes', middleware.initErrorHandlers);
//keystone.pre('routes', middleware.initLocals);
//keystone.pre('render', middleware.flashMessages);

// Handle 404 errors
//keystone.set('404', function(req, res, next) {
//  res.notfound();
//});
//
//// Handle other errors
//keystone.set('500', function(err, req, res, next) {
//  var title, message;
//  if (err instanceof Error) {
//    message = err.message;
//    err = err.stack;
//  }
//  res.err(err, title, message);
//});

// Load Routes
var routes = {
  views: importRoutes('./views')
};

// Bind Routes
exports = module.exports = function(app) {

  app.get('/', routes.views.index);
  app.get('/about(.html)?', routes.views.page('about'));
  app.get('/contact(.html)?', routes.views.page('contact'));
  app.get('/teaching(.html)?', routes.views.page('teaching'));
  app.get('/projects_current(.html)?', routes.views.projects_current);
  app.get('/projects_past(.html)?', routes.views.projects_past);
}
var keystone = require("keystone");

Pages = keystone.list('Page');

module.exports = function (name) {

  // Return a view function for that page
  return function (req, res) {
    var view = new keystone.View(req, res);

    view.query('page', Pages.model.findOne({slug:name}))

    view.render(name)
  }
}

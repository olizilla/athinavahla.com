var keystone = require("keystone");

Pages = keystone.list('Page');

module.exports = function (req, res) {
  var view = new keystone.View(req, res);

  view.query("page",
    Pages.model.findOne({title:"contact"})
  )

  view.render("contact")
}
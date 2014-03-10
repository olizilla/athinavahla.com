var keystone = require("keystone");

Pages = keystone.list('Page');
Quotes = keystone.list('Quote');

module.exports = function (req, res) {
  var view = new keystone.View(req, res);

  view.query('page', Pages.model.findOne({slug:'home'}))

  view.query('quotes',
    Quotes.model.find()
      .where('published').equals(true)
  )

  view.render("home")
}

var keystone = require("keystone");

Project = keystone.list('Project');

module.exports = function (req, res) {
  var view = new keystone.View(req, res);

  view.query('projects',
    Project.model.find()
      .where('current').equals(false)
      .where('published').equals(true)
      .populate('photos')
      .sort('+createdAt')
  )

  view.render("projects_past")
}
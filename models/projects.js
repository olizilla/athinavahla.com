var keystone = require("keystone")
var Types = keystone.Field.Types

var Project = new keystone.List('Project', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
  defaultSort: '-createdAt'
})

Project.add({
  title: { type: Types.Text, required: true},
  text: { type: Types.Html, wysiwyg:true },
  year: { type: Types.Text },
  createdAt: { type: Types.Date, default: Date.now },
  current: { type: Types.Boolean, default: true },
  published: { type: Types.Boolean, default: true },
  photos: { type: Types.Relationship, ref: 'Photo', many: true }
})

Project.register()
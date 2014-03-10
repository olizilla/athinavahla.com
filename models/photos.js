var keystone = require("keystone")
var path = require("path")

var Types = keystone.Field.Types

var Photo = new keystone.List('Photo', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
  defaultSort: '-createdAt'
})

var photoDir = path.join(__dirname, '..', 'public', 'photos')

Photo.add({
  title: { type: Types.Text, required: true },
  credit: { type: Types.Text },
  file: {
    type: Types.LocalFile,
    datePrefix: "YYYYMMDDHHmm",
    dest: photoDir
  },
  createdAt: { type: Types.Date, default: Date.now }
})

Photo.relationship({path: 'project', ref: 'Project', refPath: 'photos'})

Photo.register()
var keystone = require("keystone")
var Types = keystone.Field.Types

var Page = new keystone.List('Page', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true }
})

Page.add({
  title: { type: Types.Text, required:true },
  text: { type: Types.Html }
})

Page.register()
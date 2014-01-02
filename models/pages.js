var keystone = require("keystone")
var Types = keystone.Field.Types

var Page = new keystone.List('Page', {
  nocreate: true,
  nodelete: true
})

Page.add({
  title: { type: Types.Text, required:true },
  text: { type: Types.Html }
})

Page.register()
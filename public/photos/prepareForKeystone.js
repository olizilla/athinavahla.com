var fs = require('fs')
var path = require('path')

var dir = __dirname

fs.readdir(dir, function(err, files){
  var photos = []
  files.forEach(function(name){
    if (path.extname(name) !== '.jpg') return;
    photos.push(makePhoto(name))
  })
  console.log(JSON.stringify(photos))
})

function makePhoto(name){
  return {
    file: {
      filename: name,
      path: "/photos",
      filetype: "image/jpeg"
    },
    slug: name.toLowerCase(),
    title: name
  }
}

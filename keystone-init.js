var fs = require("fs");

var dirs = [
  "lib",
  "models",
  "public",
  "routes",
  "routes/api",
  "routes/views",
  "templates",
  "templates/includes",
  "templates/layouts",
  "templates/mixins",
  "templates/views",
  "updates"
]

dirs.forEach(function (path) {
  fs.mkdirSync(path, '0770')
})

console.log("done")
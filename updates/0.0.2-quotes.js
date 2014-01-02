var keystone = require('keystone')
var async = require('async')

var Quote = keystone.list('Quote');

module.exports = function(done) {

  var quotes = [
    {
      quote: "A dream’s fuzzy surreality and yet a singular clarity of intent",
      info: "Sunday Telegraph - Liquid Splinters",
      publish: true
    },
    {
      quote: "Theatrical in performance, filmic in structure and intimate in atmosphere",
      info: "Time Out - House of Kurtz",
      publish: true
    }
  ]

  var tasks = quotes.map(function(quote){
    return function (cb) {
      new Quote.model(quote).save(cb)
    }
  })

  async.parallel(tasks, done)

};

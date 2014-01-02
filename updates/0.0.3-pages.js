var keystone = require('keystone')
var async = require('async')

var Page = keystone.list('Page');

module.exports = function(done) {

  var pages = [
    {
      title: "home",
      text: '<p>In the space between dance, theatre and visual arts Athina Vahla creates imaginary worlds in collaboration with a multi-disciplinary team of artists. She is interested in the human condition,  its myths and symbols, aspirations and failings - the timeless psyche.</p>'
    },
    {
      title:"about",
      text:'<p> Athina Vahla is an interdisciplinary artist and teacher specialising in choreography. Originally from Greece, she arrived in the UK in 1991 having won the Greek National Choreographic Award. </p> <p> In London, Athina was awarded two scholarships to further her dance studies at Laban where she received the Bonnie Bird Choreography Award 1994 before undertaking an MA in interdisciplinary arts at Middlesex University. Since then, she has worked extensively as a <a href="projects_past.html">choreographer</a> and <a href="teaching.html">teacher</a> and produced a steady stream of critically acclaimed work across Europe. </p> <p> Since 2001, Athina has concentrated on large scale, site-specific work that creates evocative environments for performers and audiences to inhabit and explore. She is particularly interested in the historical elements of site and how traces of the past inform the making of new work. Underpinning her process is a concern with humanism and contemporary society. </p> <p> Athina has been artist in residence at Greenwich Dance Agency since 2001 <a href="http://www.greenwichdance.org.uk">www.greenwichdance.org.uk</a>  and she is an Artsadmin Artist <a href="http://www.artsadmin.co.uk">www.artsadmin.co.uk</a> </p>'
    }
  ]

  var tasks = pages.map(function(page){
    return function (cb) {
      new Page.model(page).save(cb)
    }
  })

  async.parallel(tasks, done)

};
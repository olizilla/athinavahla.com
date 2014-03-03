var keystone = require('keystone')
var async = require('async')

var Page = keystone.list('Page');

module.exports = function(done) {

  var pages = [
    {
      title: "Home",
      text: '<p>In the space between dance, theatre and visual arts Athina Vahla creates imaginary worlds in collaboration with a multi-disciplinary team of artists. She is interested in the human condition,  its myths and symbols, aspirations and failings - the timeless psyche.</p>'
    },
    {
      title:"About",
      text:'<p> Athina Vahla is an interdisciplinary artist and teacher specialising in choreography. Originally from Greece, she arrived in the UK in 1991 having won the Greek National Choreographic Award. </p> <p> In London, Athina was awarded two scholarships to further her dance studies at Laban where she received the Bonnie Bird Choreography Award 1994 before undertaking an MA in interdisciplinary arts at Middlesex University. Since then, she has worked extensively as a <a href="projects_past.html">choreographer</a> and <a href="teaching.html">teacher</a> and produced a steady stream of critically acclaimed work across Europe. </p> <p> Since 2001, Athina has concentrated on large scale, site-specific work that creates evocative environments for performers and audiences to inhabit and explore. She is particularly interested in the historical elements of site and how traces of the past inform the making of new work. Underpinning her process is a concern with humanism and contemporary society. </p> <p> Athina has been artist in residence at Greenwich Dance Agency since 2001 <a href="http://www.greenwichdance.org.uk">www.greenwichdance.org.uk</a>  and she is an Artsadmin Artist <a href="http://www.artsadmin.co.uk">www.artsadmin.co.uk</a> </p>'
    },
    {
      title:"Contact",
      text:'<p> CHERYL PIERCE<br> Artists&apos; Producer </p> <p> ARTSADMIN<br> Toynbee Studios<br> 28 Commercial Street<br> London<br> E1 6AB </p> <p> +44 (0)207 247 5102<br> cheryl@artsadmin.co.uk<br> <a href="http://www.artsadmin.co.uk">www.artsadmin.co.uk</a> </p>'
    },
    {
      title:"Teaching",
      text:'<p> In 2011, Athina is Senior Lecturer in Choreography and Physical Theatre at the Drama Department of Rhodes University, Grahamstown, South Africa, and will create a work for the Grahamstown National Art Festival in July 2011. <a href="http://www.grahamstown.co.za">www.grahamstown.co.za</a> </p> <p> Athina is Head of Choreography at the State School of Dance in Athens. Since 1989, she has taught choreography at a range of institutions including Laban, London Contemporary Dance School, Middlesex University, Birkbeck University, Central St. Martin’s School of Art &amp; Design, Westminster University, London Metropolitan University, London Centre for Theatre Studies, Akademi, Candoco, Graeae, Sadler’s Wells over 60s Group, Icelandic Dance Company, Kairos in Venice and Le Centre de Formation in Brussels. </p> <p> Athina has developed a mentoring role with artists nationally and internationally including Eddie Ladd and Emma Carlson in Wales. She was the movement collaborator for Shinkansen’s Future Physical in London, Germany and Finland and Movement Expert for French Mottershead’s Club Class at Tate Modern, Tate Liverpool, Brighton Festival and the ICA. </p>'
    }
  ]

  var tasks = pages.map(function(page){
    return function (cb) {
      new Page.model(page).save(cb)
    }
  })

  async.parallel(tasks, done)

};
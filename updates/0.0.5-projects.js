var keystone = require('keystone')
var async = require('async')

var Project = keystone.list('Project');

module.exports = function(done) {

  var projects = [
    {
      title: "Strand",
      text: '<p><b>Infecting the City Festival, Cape Town, South Africa</b></p> <p><b>February 2011</b></p> <p> A site-specific commission for Infecting the City Festival that takes place at the new&nbsp;train station, Forecourt&nbsp;Square, in the City Hub, Cape Town. Drawing its&nbsp;inspiration from the festival&nbsp;theme this year "Treasure", <span class="title">Strand</span>&nbsp;focuses&nbsp;on the&nbsp;cultural and architectural heritage of the square and its&nbsp;historical connection to the sea as a port.&nbsp; </p> <p> <a href="http://www.infectingthecity.com">www.infectingthecity.com</a> </p>',
      year: "2011",
      current: true,
      published: true
    },
    {
      title: "In Preparation",
      text: '<p><b> Ongoing </b></p> <p> The third stage of research into Arenas, <span class="title">In Preparation</span> is a solo, laboratory-based work which tests the performer’s endurance to its limits. Made in collaboration with dancer/dance scientist Emma Redding, writer/dramaturg Mary Ann Hushlak, film-maker Monica Alcazar, Dr. Sarah Chin GP, and avant-garde music collective Squib-box, <span class="title">In Preparation</span> was first performed as part of the IADMS conference at the Birmingham Hippodrome in October 2010 and then at the Old Deptford Police Station, London in January 2011. The next stage will be presented as a performance and discourse at the IADMS conference in Washington DC, October 2011. </p> <p> <a href="http://www.iadms.org">www.iadms.org</a><br> <a href="http://www.squib-box.com">www.squib-box.com</a> </p>',
      year: "Ongoing",
      current: true,
      published: true
    },
    {
      title: "The Splinter in the Flesh",
      text: '<p> Originally commissioned as a work in progress by British Council, Greece and Isadora Duncan Institute, <span class="title">The Splinter in the Flesh</span> was further developed by the Hellenic Dance Company at the State School of Dance, Athens in Summer 2008 and was premiered at the Athens Music Hall in December 2010. The full-length work was the final stage of a three year project based on the idea of identity and otherness. For this, the theatre was transformed in a gladiatorial caged arena&nbsp;and the theme of "fight or flight"&nbsp;became the metaphor for&nbsp;human consciousness and its consequences.&nbsp; The <span class="title">Splinter in the Flesh</span> is available for touring. </p>',
      year: "2010",
      current: true,
      published: true
    },
    {
      title: "Arenas",
      text: '<p> A body of work to be developed over the next five years focusing on the concept of the arena as a playground to investigate the idea of sport-theatre and physical and mental exertion and the threshold of pain. The first phase of research and development, <span class="title">Agon</span>, took place at Greenwich Dance Agency in 2008 and the second phase, <span class="title"><a href="projects_past.html#fight-club">Fight Club</a></span>, was a Homelands commission for Chisenhale Dance Space in November 2009. The current manifestation, <span class="title"><a href="#in-preparation">In Preparation</a></span>, is in process. </p>',
      year: "2010",
      current: true,
      published: true
    },
    {
      title: "Knots",
      text: '<p><b> Summer Dance Festival, Limasol, Cyprus </b></p> <p><b> July 2010 </b></p> <p> A site-specific commission by Nea Kinisi for the Limasol Summer Dance Festival,, Knots was based on the historical and social significance of the sea for the inhabitants of the island. It&nbsp;took place&nbsp;on the seafront of the city&nbsp;and was performed both in sea and on&nbsp;land.&nbsp;&nbsp; </p>',
      year: "2010",
      current: false,
      published: true
    },
    {
      title: "Meet Market",
      text: '<p><b> Infecting the City Festival, Church Square, Cape Town, South Africa </b></p> <p><b> 13 to 20 February 2010 </b></p> <p><a href="http://www.infectingthecity.com/2010/whats-on/productions/meet-market/"> www.infectingthecity.com </a></p> <p> Athina has been selected to take part in an eight week creative residency in Cape Town to collaborate with performance makers from South Africa, Zimbabwe, Australia and the Netherlands to make a brand new site-specific work for Infecting the City festival. </p> <p> A week-long festival of outdoor work taking place all over Cape Town, this year’s Infecting the City takes the theme of Human Rites. </p> <p> On the Square that was once home to the ritual of slavery, a new rite is exercised. An infected wound is lanced, disinfected and then sealed to allow healing. </p> <p> The procedure is not pretty; it concerns dis-ease. The active disinfecting agent is a radical swing between the opposing dynamics of the violent and the funny, the extraordinary and the mundane. Stillness in the midst of vigorous movement. The putrefaction of centuries of denial and shame requires removal. It is painful and yet, strangely, it provokes laughter: both are necessary for complete healing. </p> <p> Summoning the conflicting memories and the fragmented histories of the people of Cape Town to Church Square, this ritual weaves one story from many truths. </p>',
      year: "2010",
      current: false,
      published: true
    },
    {
      title: "Fight Club",
      text: '<p> <b>A Homelands Dance Festival commission</b> </p> <p> <b>Chisenhale Dance Space</b> </p> <p> <b>7pm, 8 November, 2009</b> </p> <p> <a href="http://www.chisenhaledancespace.co.uk">www.chisenhaledancespace.co.uk</a> </p> <p> For Homelands Dance Festival, Athina will be working with a dancer (Leon Baugh), a dance scientist (Emma Redding), a film-maker (Monica Alcazar) and a photographer (Helen Burrows) alongside a boxer and his trainer from Repton Boys Boxing Club in Bethnal Green to investigate boxing training, structures and rituals. </p> <p> The creative team will work together over two weeks in a short, risk-taking process that will look at transforming elements of boxing training into performative action and touch upon state of mind in both training and contest. On Sunday 8th November, they will show and discuss their work to date at Chisenhale Dance Space. This is the second phase of research and development towards the <span class="title">Arenas</span> project. </p> <p> The photographs by Helen Burrows are part of her current project <span class="title">No Guts No Glory</span> at Repton Boys Boxing Club. <a href="http://www.helenburrows.com">www.helenburrows.com</a> </p>',
      year: "2009",
      current: false,
      published: true
    },
    {
      title: "Listening Post",
      text: '<p> Athina was Dancer in Residence at the Science Museum, London from May to October 2008. The focus of the residency was a performed response to <span class="title">The Listening Post</span>, a ‘dynamic portrait’ of online communication by artists Mark Hansen and Ben Rubin that displays uncensored fragments of text sampled in real-time from internet chat-rooms and bulletin boards. Stray thoughts resonate through the space in sound and voice as texts surge, flicker, appear and disappear across a suspended grid of over 200 electronic screens. </p> <p> Athina’s response was a series of movement vignettes repeated in a cyclical pattern. Through the live presence of the dancers, she tried to locate a sense of humanity in the symphony of disembodied voices and texts and to reflect the contrasts between communication and isolation, utterance and silence, the passing and the permanent, sender and receiver, and the fleeting moment of a thought upon a screen. </p> <p> <small> commissioned by the Arts Service, Kensington &amp; Chelsea and Science Museum Arts Projects <a href="http://www.sciencemuseum.org.uk/visitmuseum/galleries/listening_post.aspx">www.sciencemuseum.org.uk</a> </small></p>',
      year: "2008",
      current: false,
      published: true
    },
    {
      title: "Objects of Friction and Fact",
      text: '<p> Objects of Friction and Fact, draws its inspiration from Kurt Vonnegut’s book A Man Without A Country. Using the mythological element of the triad and constructing a fictional, hermetic world, it attempts to voice an objection to the present state of “civilisation”. </p> <p> <small> Objects of Friction and Fact was commissioned for MIKS Dance Theatre and performed at Laban and in Sweden as well as in Nottingham as part of Nottdance Dialogue 2008. <a href="http://www.miks.org.uk">www.miks.org.uk</a> ~ <a href="www.dance4.co.uk">www.dance4.co.uk</a> </small></p>',
      year: "2008",
      current: false,
      published: true
    },
    {
      title: "Spaces Between",
      text: '<p> A site-specific work for the foyers and public spaces to celebrate the re-opening of the Royal Festival Hall, Southbank Centre. Athina worked with dramaturg Pete Brooks to create a large-scale work that took as its starting point the Festival of Britain in 1951 and traced post war British society to the present day. </p> <p> The six floors of the Royal Festival Hall became the decks of a ghost ship journeying along the Thames bringing the past to the present and anticipating a future that is about to unfold. Athina collaborated  with Candoco Dance Company, Central St Martin’s School of Art and Design, Newham Sixth Form College and Guildhall School of Music to create a promenade performance incorporating seven simultaneous journeys with a cast of 150 performers and an audience of 1000 for each performance. </p> <p> <span class="quote">“there’s a lot of spinning, dancing, kicking… and, in the middle, our writhing young man I realise is not acting, but has cerebral palsy and he’s having the time of his life. They all are. These are the kids from London whose families hail from all around the world… Some of them are disabled, some of them are uber-abled. And they’re bringing the South Bank to where it should be… This is London. And I was incredibly proud. It was brilliant.”</span> <span class="quoteInfo"><a href="http://larapawson.blogspot.com">larapawson.blogspot.com</a></span> </p> <p> <small> Commissioned by Southbank Centre, London <a href="http://www.southbankcentre.co.uk">www.southbankcentre.co.uk</a> </small></p>',
      year: "2007",
      current: false,
      published: true
    },
    {
      title: "In Praise of Folly",
      text: '<p> A rich and evocative piece of dance theatre inspired by the intrigues of Renaissance art. <span class="title">In Praise of Folly</span> is pervaded by a powerful sense of beauty coupled with a constant potential for destruction. The work draws its theme from Erasmus’s In Praise of Folly, a satire based on the religious and political state of Renaissance Italy. </p> <p> <span class="title">In Praise of Folly</span> was developed from <span class="title">Memento Mori</span> a site-specific project created in 2005 for Candoco Dance Company and Greenwich Dance Agency and influenced by research in Italy on Western religious iconography. Athina’s journey was supported by Candoco and guided by curators from the National Gallery and the Courtauld Institute. </p> <p><small> Commissioned by Candoco Dance Company <a href="http://www.candoco.co.uk">www.candoco.co.uk</a> ~  Presented at the Queen Elizabeth Hall and toured nationally and internationally. </small></p> <p> <span class="quote">“a deep and disturbing piece of dance theatre with atmospheric sound effects by Wajid Yaseen… the dance is lyrical and fluid in movement with some stunning visual images”</span> <span class="quoteInfo">The Stage</span> </p> <p> <span class="quote">“A wild ride”</span> <span class="quoteInfo">The Guardian</span> </p> <p> <span class="quote">“a series of solos and duets in which man’s folly and ultimate suffering are portrayed to beautiful and often heartbreaking effect. Most memorably the spotlight singles out a dancer, blindfolded, struggling and falling, in a metal tunnel – one of the most poetic representations of human suffering I have ever seen on stage” </span> <span class="quoteInfo">MusicOHM.com</span> </p>',
      year: "2006",
      current: false,
      published: true
    },
    {
      title: "By Your Leave",
      text: '<p> An interpretation of the Spanish bullfight and its rituals made for Transitions Dance Company. The bullring is used as an arena for human relationships which conjures feelings of suffocation and renders desire futile. The bullfighter and the bull become man and his shadow. </p> <p> <span class="quote">“I was stunned by the vigour and rough violence of Vahla’s take on the Spanish bull-ring. Tall figures sharpening knives made a memorable image to open a series of sinister interactions which ‘render human desire futile’. The music by Vivaldi, Cave and one of Schubert’s most moving songs contributed to a satisfying whole.”</span> <span class="quoteInfo">Musical Pointers</span> </p> <p><small> Commissioned by <a href="http://www.laban.org/transitions_dance_company.phtml ">Transitions Dance Company</a> </small></p>',
      year: "2005",
      current: false,
      published: true
    },
    {
      title: "Wrestling an Angel",
      text: '<p> A two-part, site-specific work for the Herb Garret and Old Operating Theatre at St Thomas’s Hospital and a vast disused abattoir in Clerkenwell that took the audience on a physical and emotional journey through the complex landscape of the human body and mind in settings of surgery and slaughter. </p> <p> The Old Operating Theatre presents the spectator with the scientific notion of order where the body is dissected to find the mind. In the labyrinthine compartments of the vast abattoir, order breaks down and the journey is haunted by fragmented memory. </p> <p> <span class="quote">“You climb a claustrophobic church tower staircase, pass through a hallway stacked high with the memorabilia of pre-anaesthetic surgery, and wait outside a turret door with the quiet anxiety of a visitor in a hospital waiting room.”</span> <span class="quoteInfo">The Guardian</span> </p>',
      year: "2004",
      current: false,
      published: true
    },
    {
      title: "The Windows Were Walled",
      text: '<p> A promenade performance that animated the hidden spaces of the magnificent 1930&apos;s Greenwich Borough Hall. The piece drew inspiration from Lewis Carroll’s Alice Through the Looking Glass and used the element of glass as a lens through which to view a world that oscillated between reality and illusion </p> <p><small> Commissioned by Greenwich Dance Agency for London Open House <a href="http://www.greenwichdance.org.uk ">www.greenwichdance.org.uk </a> </small></p>',
      year: "2003",
      current: false,
      published: true
    },
    {
      title: "House of Kurtz",
      text: '<p> Made for the Master Shipwright’s Palace, Deptford and based on Joseph Conrad’s novella Heart of Darkness. <span class="title">House of Kurtz</span> was a site specific project incorporating movement, sound, sculpture and film. The piece provided a unique opportunity to experience this building in a state of historical transition, animating it before extensive renovation began a new phase of its life. </p> <p><small> <a href="http://onesquareyard.com/localExamples/houseOfKurtz/">www.onesquareyard.com</a> </small></p>',
      year: "2002",
      current: false,
      published: true
    },
    {
      title: "F-Stop",
      text: '<p> A promenade performance based on Samuel Beckett’s short plays <span class="title">Not I</span>, <span class="title">Rockaby</span> and <span class="title">A Piece of Monologue</span> and performed at Greenwich Dance Agency, Battersea Arts Centre and Athens Concert Hall. </p> <p> <span class="quote">“Vahla’s version departs from the literal content of the source but, as in Beckett, she wants to use the performer as a vessel pouring out strange contents… Sonia Rafferty is a precise mirror of an interior horror, a human machine that obeys an exterior motor while keeping a frightful and rebellious eye on the unfriendly takeover. Her struggle, accompanied by violent mechanical sound, is hypnotic. The long, concentrated process of interiorising rather than mimicking the colonisation of Rafferty’s body is painfully visible.”</span> <span class="quoteInfo">Dance Europe</span> </p>',
      year: "2001",
      current: false,
      published: true
    }
  ]

  var tasks = projects.map(function(project){
    return function (cb) {
      new Project.model(project).save(cb)
    }
  })

  async.series(tasks, done)

};
var keystone = require('keystone')
var User = keystone.list('User')

module.exports = function(done) {

  new User.model({
    name: { first: 'Admin', last: 'User' },
    email: 'admin@example.org',
    password: 'admin',
    canAccessKeystone: true
  }).save(done);

}
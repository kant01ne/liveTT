/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/comments', require('./api/comment'));
  app.use('/api/games', require('./api/game'));
  app.use('/api/users', require('./api/user'));
  app.use('/api/players', require('./api/player'));
  app.use('/api/teams', require('./api/team'));
  app.use('/api/matchs', require('./api/match'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};

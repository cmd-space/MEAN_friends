  // This is our routes.js file located in /config/routes.js
  // This is where we will define all of our routing rules!
  var friends = require('./../server/controllers/friends.js');
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
    app.get('/friends', function(req, res) {
    	friends.show(req, res);
    	// friends.add("Rupert", 48);
    });
  }
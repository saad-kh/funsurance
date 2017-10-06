'use strict';
module.exports = function(app) {
  // todoList Routes
  app.route('/destination')
    .get((req,res) => (res.send('Victory...')));
};

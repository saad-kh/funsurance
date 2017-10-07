'use strict';
var recognizeImage = require('./visual-recognition');

module.exports = function(app) {
  // todoList Routes
  app.route('/destination')
    .get((req,res) => (res.send('Victory...')));

  app.route('/recognize')
    .get(async (req,res) => {
      try {
        var recongnization = await recognizeImage();
        res.send(recongnization);
      }
      catch(e) {
        res.send('error');
      }
    });
};

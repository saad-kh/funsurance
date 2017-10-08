'use strict';
var recognizeImage = require('./visual-recognition');
var user = require('./user');
var prompt = require('./prompt');

module.exports = function(app) {
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

  app.route('/user')
    .get((req,res) => (res.send(user.get())))
    .put((req,res) => (res.send(user.set(req.body))));

  app.route('/prompt')
    .post((req,res) => {
      return (res.send(prompt.prompt(req.body.question)))});
};

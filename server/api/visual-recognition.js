var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');
var visual_recognition = new VisualRecognitionV3({
  api_key: 'fcd6e7fde52df827b64c888e66c4d6f823463f1f',
  version_date: VisualRecognitionV3.VERSION_DATE_2016_05_20
});

module.exports = function() {
  return new Promise ((resolve, reject) => {
    var params = {
      images_file: fs.createReadStream(__dirname + '/dog.jpg')
    };
    visual_recognition.classify(params, function(err, res) {
      if (err) reject(err);
      else
        resolve(JSON.stringify(res))
    });
  });
};

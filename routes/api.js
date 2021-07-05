'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      //console.log("TEXT: "+req.body.text + " LOCALE: " + req.body.locale)
      if(req.body.text == ""){
        res.json({ error: 'No text to translate' })
      }
      if(!req.body.text || !req.body.locale){
        res.json({ error: 'Required field(s) missing' })
      }

      if(req.body.locale == "american-to-british" || req.body.locale == "british-to-american"){
        let translate = translator.translate(req.body.text, req.body.locale)
        if(req.body.text == translate){
          //console.log("RETURN EQUAL: " + translate)
          return res.json({text: req.body.text, translation: "Everything looks good to me!"})
        }else{
          //console.log("RETURN: " + translate)
          return res.json({text: req.body.text, translation: translate})
        }  
      }else{
        return res.json({ error: 'Invalid value for locale field' })
      }
      
    });
};

const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  let translator = new Translator();

  test("Translation with text and locale fields", function(done){
    chai.request(server)
    .post("/api/translate")
    .send({text: 'Mangoes are my favorite fruit.', locale: "american-to-british"})
    .end(function(err, res){
      assert.equal(res.status, 200)
      assert.equal(res.type, 'application/json')
      assert.equal(res.body.text, 'Mangoes are my favorite fruit.')
      assert.equal(res.body.translation, "Mangoes are my <span class=\"highlight\">favourite</span> fruit.")
      done()
    })
  })

  test("Translation with text and invalid locale field", function(done){
    chai.request(server)
    .post("/api/translate")
    .send({text: 'Mangoes are my favorite fruit.', locale: "missing"})
    .end(function(err, res){
      assert.equal(res.status, 200)
      assert.equal(res.type, 'application/json')
      assert.equal(res.body.error, 'Invalid value for locale field')
      done()
    })
  })

  test("Translation with missing text field:", function(done){
    chai.request(server)
    .post("/api/translate")
    .send({locale: "missing"})
    .end(function(err, res){
      assert.equal(res.status, 200)
      assert.equal(res.type, 'application/json')
      assert.equal(res.body.error, 'Required field(s) missing')
      done()
    })
  })

  test("Translation with missing locale field:", function(done){
    chai.request(server)
    .post("/api/translate")
    .send()
    .end(function(err, res){
      assert.equal(res.status, 200)
      assert.equal(res.type, 'application/json')
      assert.equal(res.body.error, 'Required field(s) missing')
      done()
    })
  })

  test("Translation with empty text:", function(done){
    chai.request(server)
    .post("/api/translate")
    .send({text: '', locale: "american-to-british"})
    .end(function(err, res){
      assert.equal(res.status, 200)
      assert.equal(res.type, 'application/json')
      assert.equal(res.body.error, 'No text to translate')
      done()
    })
  })

  test("Translation with text and locale fields", function(done){
    chai.request(server)
    .post("/api/translate")
    .send({text: "Mangoes are my favourite fruit.", locale: "american-to-british"})
    .end(function(err, res){
      assert.equal(res.status, 200)
      assert.equal(res.type, 'application/json')
      assert.equal(res.body.text, "Mangoes are my favourite fruit.")
      assert.equal(res.body.translation, 'Everything looks good to me!')
      done()
    })
  })
});

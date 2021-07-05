const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator;
suite('Unit Tests', () => {
  translator = new Translator();

  test("Mangoes are my favorite fruit.", function(done){
    let output = translator.translate("Mangoes are my favorite fruit.", "american-to-british")
    assert.equal(output, "Mangoes are my <span class=\"highlight\">favourite</span> fruit.")
    done();
  })

  test("I ate yogurt for breakfast.", function(done){
    let output = translator.translate("I ate yogurt for breakfast.", "american-to-british")
    assert.equal(output, "I ate <span class=\"highlight\">yoghurt</span> for breakfast.")
    done();
  })

  test("We had a party at my friend's condo.", function(done){
    let output = translator.translate("We had a party at my friend's condo.", "american-to-british")
    assert.equal(output, 'We had a party at my friend\'s <span class="highlight">flat</span>.')
    done();
  })

  test("Can you toss this in the trashcan for me?", function(done){
    let output = translator.translate("Can you toss this in the trashcan for me?", "american-to-british")
    assert.equal(output, 'Can you toss this in the <span class="highlight">bin</span> for me?')
    done();
  })

  test("The parking lot was full.", function(done){
    let output = translator.translate("The parking lot was full.", "american-to-british")
    assert.equal(output, 'The parking lot was full.')
    done();
  })

  test("Like a high tech Rube Goldberg machine.", function(done){
    let output = translator.translate("Like a high tech Rube Goldberg machine.", "american-to-british")
    assert.equal(output, 'Like a high tech Rube Goldberg machine.')
    done();
  })

  test("To play hooky means to skip class or work.", function(done){
    let output = translator.translate("To play hooky means to skip class or work.", "american-to-british")
    assert.equal(output, 'To play hooky means to skip class or work.')
    done();
  })

  test("No Mr. Bond, I expect you to die.", function(done){
    let output = translator.translate("No Mr. Bond, I expect you to die.", "american-to-british")
    assert.equal(output, 'No <span class="highlight">Mr</span> Bond, I expect you to die.')
    done();
  })

  test("Dr. Grosh will see you now.", function(done){
    let output = translator.translate("Dr. Grosh will see you now.", "american-to-british")
    assert.equal(output, '<span class="highlight">Dr</span> Grosh will see you now.')
    done();
  })

  test("Lunch is at 12:15 today.", function(done){
    let output = translator.translate("Lunch is at 12:15 today.", "american-to-british")
    assert.equal(output, 'Lunch is at <span class="highlight">12.15</span> today.')
    done();
  }) 
  
  test("We watched the footie match for a while.", function(done){
    let output = translator.translate("We watched the footie match for a while.", "british-to-american")
    assert.equal(output, 'We watched the <span class="highlight">soccer</span> match for a while.')
    done();
  })

  test("Paracetamol takes up to an hour to work.", function(done){
    let output = translator.translate("Paracetamol takes up to an hour to work.", "british-to-american")
    assert.equal(output, 'Paracetamol takes up to an hour to work.')
    done();
  })

  test("First, caramelise the onions.", function(done){
    let output = translator.translate("First, caramelise the onions.", "british-to-american")
    assert.equal(output, 'First, <span class="highlight">caramelize</span> the onions.')
    done();
  })

  test("I spent the bank holiday at the funfair.", function(done){
    let output = translator.translate("I spent the bank holiday at the funfair.", "british-to-american")
    assert.equal(output, 'I spent the bank holiday at the <span class="highlight">carnival</span>.')
    done();
  })

  test("I had a bicky then went to the chippy.", function(done){
    let output = translator.translate("I had a bicky then went to the chippy.", "british-to-american")
    assert.equal(output, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.')
    done();
  })

  test("I've just got bits and bobs in my bum bag.", function(done){
    let output = translator.translate("I've just got bits and bobs in my bum bag.", "british-to-american")
    assert.equal(output, 'I\'ve just got bits and bobs in my bum bag.')
    done();
  })

  test("The car boot sale at Boxted Airfield was called off.", function(done){
    let output = translator.translate("The car boot sale at Boxted Airfield was called off.", "british-to-american")
    assert.equal(output, 'The car boot sale at Boxted Airfield was called off.')
    done();
  })

  test("Have you met Mrs Kalyani?", function(done){
    let output = translator.translate("Have you met Mrs Kalyani?", "british-to-american")
    assert.equal(output, 'Have you met <span class="highlight">Mrs.</span> Kalyani?')
    done();
  })

  test("Prof Joyner of King's College, London.", function(done){
    let output = translator.translate("Prof Joyner of King's College, London.", "british-to-american")
    assert.equal(output, '<span class="highlight">Prof.</span> Joyner of King\'s College, London.')
    done();
  })

  test("Tea time is usually around 4 or 4.30.", function(done){
    let output = translator.translate("Tea time is usually around 4 or 4.30.", "british-to-american")
    assert.equal(output, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.')
    done();
  })

  test("Mangoes are my favorite fruit.", function(done){
    let output = translator.translate("Mangoes are my favorite fruit.", "american-to-british")
    assert.equal(output, "Mangoes are my <span class=\"highlight\">favourite</span> fruit.")
    done();
  })

  test("I ate yogurt for breakfast.", function(done){
    let output = translator.translate("I ate yogurt for breakfast.", "american-to-british")
    assert.equal(output, "I ate <span class=\"highlight\">yoghurt</span> for breakfast.")
    done();
  })

  test("We watched the footie match for a while.", function(done){
    let output = translator.translate("We watched the footie match for a while.", "british-to-american")
    assert.equal(output, 'We watched the <span class="highlight">soccer</span> match for a while.')
    done();
  })

  test("Paracetamol takes up to an hour to work.", function(done){
    let output = translator.translate("Paracetamol takes up to an hour to work.", "british-to-american")
    assert.equal(output, 'Paracetamol takes up to an hour to work.')
    done();
  })

});

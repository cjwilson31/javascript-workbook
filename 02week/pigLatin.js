'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  const pigLatin=(word) => {
    const vowels=['a','e','i','o','u'];
    const cons = []
    if (vowels.includes(word[0])) {
      return word.concat("yay")}
    const myArray = word.split("")
    console.log(myArray);
    for(let i=0; i< myArray.length; i++){
      console.log(myArray[i], i)
      if (vowels.includes(myArray[i])){
        const restOfword = myArray.slice(i)
        console.log('restofword,', restOfword)
        // Your code here
        const restOfwordPlusCons = restOfword.concat(cons)
        console.log('restOfwordPlusCons,', restOfwordPlusCons)
        const makeItAString = restOfwordPlusCons.join('')
        console.log('makeItAString,', makeItAString)
        const addAy = makeItAString.concat("ay")
        console.log('addAy,', addAy)
        return addAy
      }
      cons.push(myArray[i])
      console.log(cons);
    }
  }
  pigLatin("school");
  //this is honestly as far as could get in a day without cheating
  
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

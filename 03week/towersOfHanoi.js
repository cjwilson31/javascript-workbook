'use strict';
// Get input
//Check if isValid()
//is the start stack empty? (if it is , === invalid)
//is block being moved smaller than last block on finish stack
//if both are yes, return true
// else return false
//if !isValid() go back to get input
//if move is valid moveBlock()
// moveBlock()
// remove from start stack
// push block to finish stack
// are all blocks moved to a new stack?
//if no , get input
//if yes, checkForWin()  



const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack,endStack) => {
  // made  a copy of stacks so i wouldnt mutate the original stacks
  const stacksCopy = {        
    a:[],
    b:[],
    c:[]
  }
  // getting keys from stacks, and copying the value of each key into the copy
  //using bracket notation to fetch key in string format
  Object.keys(stacks).forEach( key => {
    stacksCopy[key] = stacks[key]
  })
  // the array with the starting numbers
  const startingStack = stacksCopy[startStack]
  // where the block ends up
  const endingStack = stacksCopy[endStack]
  // get the value of the last block , so i can move it to the ending stack
  const currentBlock = startingStack.pop()
  // pushing it to the ending block
  endingStack.push(currentBlock);
  // setting it to the variable the game cares about
  stacks = stacksCopy
  
}



function isLegal() {
  // Your code here

}

const checkForWin = () => {
  // checks to see if stacks[c] has all of the 'blocks', if so the game is won
  if (stacks['c'].length === 4 ){
    return true}   
}

const resetGame = () => {
  // calling stack var to reset the game to its original state if game is won
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  };
}

const towersOfHanoi = (startStack, endStack) => {
  // calling all my functions to get this game crakalackin
  movePiece(startStack,endStack);
  if (checkForWin()) {
    console.log("You have conquered The Towers of Hanoi.");
    resetGame();
  }
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}


if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
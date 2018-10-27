'use strict';
// Get input
//Check if isValid()
//is stack empty?
//is block being moved smaller than last block on finish stack
//if both are yes, return true
// else return false
//if !isValid() go back to get input
//if move is valid moveBlock()
// moveBlock()
// push block to finish stack
// remove from start stack
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

function movePiece(startStack,endStack) {
  // made copy too not mutate original stacks
  const stacksCopy = {        
    a:[],
    b:[],
    c:[]
  }
  // getting keys from stacks, and copying the value of each key into the copy
  //using bracket notation to fetch key in string format
  Object.keys(stacks).forEach(key=>{
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

function checkForWin() {
  
  
  
}

function towersOfHanoi(startStack, endStack) {
  // Your code her
  movePiece(startStack,endStack)
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

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

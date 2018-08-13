
testObj = {
  hi: 'hi',
  hehe: 'hehe',
  [Symbol.iterator]: function *(){
    yield this.hehe
    yield this.hi
  }
}

var obj = {
  hello: 'hello',
  goodbye: 'goodbye',
  test: testObj,
  [Symbol.iterator]: function *(){
    yield this.goodbye
    yield* this.test
  }
}

for(let val of obj){
  console.log(val)
}

function makePasta(pasta, makeSauce) {
  console.log("Boiling water"); //#1
  console.log("Putting " + pasta + " pasta in the water"); //#2
  
  // create a variable for sauce!
  var sauce = makeSauce();          // invoke makeSauce, our callback
  console.log("Mixing sauce");// #4
  console.log("Pasta is done!"); //#5
  return pasta + " Pasta with " + sauce + " sauce! Voila!"; //#6
}

/* function makePesto() {
  console.log("Making Pesto"); #3
  return "pesto";
}
 */
function makeAlfredo() {
  console.log("Making Alfredo"); //#3
  return "alfredo";
}

/* 
// we pass the whole makePesto recipe to makePasta!
console.log(makePasta("Penne", makePesto));

 */
// notice lack of parentheses after makePesto.
// Remember: we want to pass the function, not execute it and pass a return value.
console.log(makePasta("Farfalle", makeAlfredo));

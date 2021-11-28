// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
cats.push("Ralph")
}

function destructivelyPrependCat(name) {
cats.unshift("Milo")
}

function destructivelyRemoveLastCat() {
cats.pop()
}

function destructivelyRemoveFirstCat(){
cats.shift()
}

let copyOfcats() = [...cats];

function appendCat(string){
    copyOfcats.push("Sylvester");
}

function prependCat(name){
    console.log(cats.slice(0));
}

function removeLastCat(){
    
}

function removeFirstCat(){
    
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
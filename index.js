// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
cats.push(name)
}

function destructivelyPrependCat(name) {
cats.unshift(name)
}

function destructivelyRemoveLastCat() {
cats.pop()
}

function destructivelyRemoveFirstCat(){
cats.shift()
}

//let copyOfcats = [...cats];

function appendCat(string){
    let copyOfCats = [...cats, string];
    return (copyOfCats);
}

function prependCat(name){
let copyOfCats = [name, ...cats];
return (copyOfCats);
}

function removeLastCat(){
let copyOfCats = [...cats];
let length = copyOfCats.length;
return (copyOfCats.slice(0,length -1));
}

function removeFirstCat(){
let copyOfCats = [...cats];
return copyOfCats.slice(1)
}

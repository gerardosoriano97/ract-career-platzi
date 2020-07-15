//Old version of ES
function oldFunction(name, age, country){
  var name = name || 'Gerardo';
  var age = age || '22';
  var country = country || 'MX';

  console.log(name, age, country);
}

//ES6
function newFunction(name = 'Gerardo', age = '22', country = 'MX'){
  console.log(name, age, country);
}

newFunction();
newFunction('Juan', '55', 'MX');

//template literals

let hello = 'hello';
let world = 'world';
let phrase = hello + ' ' + world;

console.log(phrase);

let template = `${hello} ${world}`;

console.log(template);

//variables

//--before
let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor \n"
+ "incididunt ut labore et dolore magna aliqua.";

//--after
let ipsum = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.`;

console.log(lorem);
console.log(ipsum);

let person = {
  'name': 'Gerardo',
  'age': 22,
  'country': 'MX'
}

console.log(person.name, person.age);

let { name, age, country } = person;

console.log(name, age, country);

//spread operator

let team1 = ['Oscar', 'Julián', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

//scopes

{
  var globalVar = 'this is global var';
}

{
  let globalLet = 'this is global let';
  console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);

const a = 'b';
console.log(a);
a = 'a';
console.log(a);

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

//Objects

let name = 'Gerardo';
let age = 22;

//es5
b_obj = { name: name, age: age };

//es6
a_obj = { name, age };

console.log(b_obj);
console.log(a_obj);

//Arrow functions

const names = [
  { name: 'Gerardo', age: 22}
  { name: 'Roberto', age: 23}
  { name: 'Humberto', age: 22}
]

let b_listOfNames = names.map(function(item){
  console.log(item.name);
})

let a_listOfNames = names.map(item => console.log(item.name));

const c_listOfNames = (name, age) => {
  ...
}

const d_listOfNamaes = name => {
  ...
}

const square = num => num * num;

//Promise

const helloPromise = () => {
   return new Promise((resolve, reject) => {
     if (true) {
       resolve('Hey!');
     } else {
       reject('Oops!');
     }
   })
}

helloPromise()
  .then(response => console.log(response))
  .then(() => console.log('Hi'))
  .catch(error => console.log(error));

//class

class Calculator {
  constructor() {
    this.a_value = 0;
    this.b_value = 0;
  }
  sum(a_value, b_value){
    this.a_value = a_value;
    this.b_value = b_value;

    return this.a_value + this.b_value;
  }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));

import { hello } from './module';

hello();

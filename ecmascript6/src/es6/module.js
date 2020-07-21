const hello = () => {
  return 'hello';
}

export default hello;

//Generator

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

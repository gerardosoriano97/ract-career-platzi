const obj = {
  name: 'Gerardo',
  age: 22,
  country: 'MX',
};

let {country, ...all} = obj;
console.log(all);

const obj = {
  name: 'Gerardo',
  age: 22,
}

const otherObj = {
  ...obj,
  country: 'MX'
}

console.log(otherObj);

//Finally promise

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => { resolve('Hello World!') }, 3000)
      : reject(newError('Test Error'));
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizó'));

// Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-09-07');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);

/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const firstName: string = 'Opiatte';
const lastName: string = 'Opiaasd';
const Age: number = 22;
const wallet: number[] = [5, 7, 10, 15, 50];

console.log(firstName);
console.log(lastName);
console.log(Age);
console.log(wallet);

type Product = {
  name: string,
  price: number,
};

type Person = {
  name: string,
  surname: string,
  age: number,
  marriage: boolean,
};

const Products: Product = {
  name: 'Makaronai',
  price: 5555,
};

const People: Person = {
  name: 'Jonas',
  surname: 'Jonaitis',
  age: 22,
  marriage: true,
};

const Friends: Person[] = [
  {
    name: 'Jonas', surname: 'Jonaitis', age: 22, marriage: true,
  },
  {
    name: 'Petras', surname: 'Petraitis', age: 23, marriage: false,
  },
  {
    name: 'X AE A-XII', surname: 'Musk', age: 2, marriage: false,
  },
];

console.log(Products);
console.log(People);
console.log(Friends);


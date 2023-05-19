type Mathfunction = (num1: number, num2: number) => number;
const add: Mathfunction = (num1, num2) => num1 + num2;
console.log(add(2, 3));

type Person = {
  name: string;
  age: number;
};
const onePerson = (person: Person): string => {
  return `I am ${person.name}, ${person.age} years old.`;
};
const nini: Person = {
  name: 'Nini',
  age: 18,
};
const introducting: string = onePerson(nini);
console.log(introducting);






type Admin = {
  name: string;
  surname: string;
  age: number;
  location: string;
};
const oneAdmin = (admin: Admin): string => {
  return `Hello , I am ${admin.name} ${admin.surname}, ${admin.age} years old and I live in ${admin.location}.`;
};
const greet: Admin = {
  name: 'Nini',
  surname: 'Makharadze',
  age: 18,
  location: 'Batumi',
};
const greetings: string = oneAdmin(greet);
console.log(greetings);







type FilterFunction = (
  arr: Array<number>,
  callback: (num: number) => boolean
) => Array<number>;
const filterArray: FilterFunction = (arr, callback) => {
  return arr.filter(callback);
};
const numbers: Array<number> = [1, 2, 3, 4, 5];
const even = (num: number): boolean => {
  return num % 2 === 0;
};
const filteredNumbers: Array<number> = filterArray(numbers, even);
console.log(filteredNumbers);





type ValidateFunction<T> = (value: T) => boolean;
const isNumberValid: ValidateFunction<number> = (value) => {
  return typeof value === 'number';
};
console.log(isNumberValid(42));
console.log(isNumberValid('Nini'));

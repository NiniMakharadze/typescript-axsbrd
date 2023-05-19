type Person = {
  name: string;
  age: number;
};

function greetPerson(person: Person): string {
  return `I am ${person.name} , ${person.age} years old.`;
}

const nini: Person = {
  name: 'Nini',
  age: 18,
};

const greeting: string = greetPerson(nini);
console.log(greeting);




type Admin = {
  
}
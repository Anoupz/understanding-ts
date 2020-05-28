function Basics() {
  const someRandomNumber = 1; // inferred type
  let email: string; // assigned type
  email = 'john@test.com';

  const person: {
    name: string;
    age: number;
    email: string;
    hobbies: string[];
  } = {
    name: 'John',
    age: 35,
    email,
    hobbies: ['Sports', 'Cooking'],
  };

  console.log(someRandomNumber);
  console.dir(person);
  console.log(person.hobbies);
}
export default Basics;

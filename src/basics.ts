function Basics() {
  const someRandomNumber = 1 // inferred type
  let email: string // assigned type
  email = 'john@test.com'

  const person: {
    name: string
    age: number
    email: string
    hobbies: string[]
  } = {
    name: 'John',
    age: 35,
    email,
    hobbies: ['Sports', 'Cooking'],
  }

  console.log(someRandomNumber)
  console.dir(person)
  console.log(person.hobbies)

  function generateError(message: string, code: number): never {
    throw { message, errorCode: code }
  }

  console.log('Throwing error now')
  // This will stop our script (Crashes our execution and nothing further gets executed)
  // Use try catch block to make sure our scripts continues to execute
  // generateError('An error occurred!!', 500);
}
export default Basics

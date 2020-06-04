const ObjectSpreadExample = () => {
  const person = {
    name: 'John',
    age: 35,
  }

  const copiedPerson = { ...person }

  person.age = 45

  console.log(copiedPerson.age) // Will print age as 35

  const add = (...numbers: number[]) => {
    return numbers.reduce(
      (curResult, currentValue) => curResult + currentValue,
      0,
    )
  }

  console.log(add(5, 3, 2))

  const { name, age } = person
  console.log(name, age)
}

export default ObjectSpreadExample

/*
  Basics of Tuples & Enums
*/

function Tuples() {
  const person: { name: string; role: (string | number)[] } = {
    name: 'John',
    role: [2, 'author'],
  }

  console.log(person.role)
  person.role.push('admin')
  console.log(person.role)
  person.role[1] = 1
  console.log(person.role)
}

function ExampleEnum() {
  enum Role {
    ADMIN = 'Admin',
    READ_ONLY = 'Read_only',
  }

  const person: { name: string; role: Role } = {
    name: 'John',
    role: Role.ADMIN,
  }

  console.log('With Enum', person.role)
}

export { Tuples, ExampleEnum }

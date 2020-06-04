type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee

const e2: ElevatedEmployee = {
  name: 'Employee1',
  privileges: ['create-server'],
  startDate: new Date(),
}

//Sample type guard

type Combinable = string | number

function add(a: Combinable, b: Combinable) {
  // This below check is to guard if the value is string
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }

  return a + b
}

type UnknownEmployee = Employee | Admin
function printEmployee(emp: UnknownEmployee) {
  // This is a type guard for objects
  if ('privileges' in emp) {
    console.log(`Privileges are ${emp.privileges}`)
  }
  if ('startDate' in emp) {
    console.log(`Start Date is ${emp.startDate}`)
  }
}

add(2, 3);
printEmployee(e2)

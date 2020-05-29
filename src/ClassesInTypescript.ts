class Department {
  name: string;
  private employees: string[] = [];

  // short hand initialization and normal initialization
  constructor(name: string, private readonly id: string) {
    this.name = name;
  }

  describe() {
    console.log(`Department : ${this.name} - ${this.id}`);
  }

  addEmployee(employeeName: string) {
    this.employees.push(employeeName);
  }
}

export default Department;

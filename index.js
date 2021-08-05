//first task
function Employee(employee) {
  return Object.assign(this, employee)
}

const employeeObj = new Employee(employeeArr[0])
//first task
function Employee(employee) {
  return Object.assign(this, employee)
}

const employeeObj = new Employee(employeeArr[0])
console.log(employeeObj)

//second task
Employee.prototype.getFullName = function() {
  return `${this.name} ${this.surname}`
}

employeeObj.getFullName()

//third task
const createEmployesFromArr = (inputArr) => {
  const outputArr = []
  inputArr.map(item => outputArr.push(new Employee(item)))
  return outputArr
}

const employeeConstructArr = createEmployesFromArr(employeeArr)
console.log(employeeConstructArr)

//fourth task 
const getFullNamesFromArr = (inputArr) => {
  const outputArr = []
  inputArr.map(item => outputArr.push(item.getFullName()))
  return outputArr
}

const fullNamesArr = getFullNamesFromArr(employeeConstructArr)
console.log(fullNamesArr)

//fifth task
const getMiddleSalary = (inputArr) => {
  let outputValue = 0
  outputValue += ~~(inputArr.reduce((acc, value) => acc + value.salary, 0) / (inputArr.length))
  return outputValue
}

const middleSalary = getMiddleSalary(employeeConstructArr)
console.log(middleSalary)

//sixth task
const getRandomEmployee = (inputaArr) => {
  const outputValue = inputaArr[Math.floor(Math.random() * inputaArr.length)]
  return outputValue
}

const randomEmployee = getRandomEmployee(employeeConstructArr)
console.log(randomEmployee)

//seventh task
class Emplyee {
  constructor() {
    Object.assign(this, employeeArr[0])
  }
  get fullInfo() {
    const outputArr = []
    for (let property in this) {
      outputArr.push(`${property} - ${this[property]}`)
    }
    return array.join(", ")
  }
  set fullInfo(inputValue) {
    for (let property in inputValue) {
      if (this.hasOwnProperty(property)) {
        this[property] = inputValue[property]
      }
    }
  }
}
const emplyeeObj = new Emplyee (employeeArr[0])
console.log(emplyeeObj)
emplyeeObj.fullInfo = {name: 'Вася', salary: 9000, email: 'ex@mail.ua'}
console.log(emplyeeObj)
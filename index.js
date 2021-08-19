//first task
const testArr = ['Vasya', 'Petya', 'Alexey']

const removeUser = (inputArr, inputIndex) => {
  inputArr.splice(inputIndex, 1)
  return console.log(inputArr)
}

removeUser(testArr, 1)

//second task
const testObj = { 
  name: 'Vasya', 
  age: 1
}

const getAllKeys = (inputObj) => {
  const outputArr = []
  for (let key in inputObj) {
    outputArr.push(key)
  }
  return console.log(outputArr)
}

getAllKeys(testObj)

//third task
const getAllValues = (inputObj) => {
  const outputArr = []
  for (let value in inputObj) {
    outputArr.push(inputObj[value])
  }
  return console.log(outputArr)
}

getAllValues(testObj)

//fourth task
const resultArr = [
  { 
    name: 'Vasya', 
    id: 1
  },
  {
    name: 'Katya', 
    id: 2
  }
]

const testObj1 = { 
  name: 'Vova', 
  id: 3
}

const testObj2 = { 
  name: 'Stas', 
  id: 4
}

const insertIntoArr = (inputObj, inputId, outputArr) => {
	const inputIndex = outputArr.findIndex(element => element.id === inputId)
  outputArr.splice(inputIndex, 0, inputObj)
  return console.log(outputArr)
}

insertIntoArr(testObj1, 2, resultArr)

//fifth task
class Candidate {
  constructor(inputObj) {
    Object.assign(this, inputObj)
  }

  getState() {
    return this.address.split(',')[2]
  }
}

const candidate = new Candidate(candidateArr[7])
console.log(candidate.getState())

//sixth task
const getCompanyNames = inputArr => {
  const outputArr = []
	inputArr.forEach(element => {
    if (!outputArr.includes(element.company)) {
			outputArr.push(element.company)
		}
  })
	return console.log(outputArr)
}

getCompanyNames(candidateArr)

//seventh task
const getUsersByYear = (inputArr, inputYear) => {
	const outputArr = []
	inputArr.forEach(element => {
		if (element.registered.split('-')[0] === String(inputYear)) outputArr.push(element._id)
	})
	return console.log(outputArr)
}

getUsersByYear(candidateArr, 2016)

//eighth task
const getCandidatesByUnreadMsg = (inputArr, inputAmount) => {
	const outputArr = []
	inputArr.forEach(element => {
		if (parseInt(element.greeting.match(/\d+/)) === inputAmount) outputArr.push(new Candidate(element))
  })
	return console.log(outputArr)
}

getCandidatesByUnreadMsg(candidateArr, 8)

//ninth task
const getCandidatesByGender = (inputArr, inputGenderValue) => {
	const outputArr = []
	inputArr.forEach(element => {
		if (element.gender === String(inputGenderValue)) outputArr.push(new Candidate(element))
  })
	return console.log(outputArr)
}

getCandidatesByGender(candidateArr, 'male')
getCandidatesByGender(candidateArr, 'female')

//tenth task
const testNumArr = [22, 15, 46, 78]

Array.prototype.customReduce = function(callback) {
  let outputValue  = 0                              
  for (let i = 0; i < this.length; i++) {
    callback(outputValue = outputValue + this[i])           
  } 
  return outputValue                             
}

let reduceResult = testNumArr.customReduce((acc, item) => acc + item)
console.log(reduceResult)

Array.prototype.customJoin = function(separator) {
  let outputValue  = ''
  for (let i = 0; i < this.length; i++) {
    outputValue += this[i]
    i < this.length - 1 ? outputValue += separator : outputValue
  }
  return outputValue
}

console.log(testNumArr.customJoin('*'))
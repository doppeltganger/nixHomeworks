//first task
const testArr = ['Vasya', 'Petya', 'Alexey']

const removeUser = (inputArr, inputIndex) => {
  inputArr.splice(inputIndex, 1)
  return inputArr
}

console.log(removeUser(testArr, 1))

//second task
const testObj = { 
  name: 'Vasya', 
  age: 1
}

const getAllKeys = inputObj => {
  return Object.keys(inputObj)
}
​
console.log(getAllKeys(testObj))


//third task
const getAllValues = inputObj => {
  return Object.values(inputObj)
}

console.log(getAllValues(testObj))

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
  outputArr.splice(outputArr.findIndex(element => element.id === inputId), 0, inputObj)
  return outputArr
}

console.log(insertIntoArr(testObj1, 2, resultArr))

//fifth task
class Candidate {
  constructor(inputObj) {
    Object.assign(this, inputObj)
  }

  getState() {
    return this.address.split(',')[2]
  }
}

console.log(new Candidate(candidateArr[7]).getState())

//sixth task
const getCompanyNames = inputArr => {
  return inputArr.map(element => {
    if (!inputArr.includes(element.company)) {
	    return element.company
	  }
  })	
}

console.log(getCompanyNames(candidateArr))

//seventh task
const getUsersByYear = (inputArr, inputYear) => {
  return inputArr
    .filter(element => element.registered.split('-')[0] === String(inputYear)) 
    .map(element => element._id)
}

console.log(getUsersByYear(candidateArr, 2016))

//eighth task
const getCandidatesByUnreadMsg = (inputArr, inputAmount) => {
  return inputArr
    .filter(element => parseInt(element.greeting.match(/\d+/)) === inputAmount)
    .map(element => new Candidate(element))
}

console.log(getCandidatesByUnreadMsg(candidateArr, 8))

//ninth task
const getCandidatesByGender = (inputArr, inputGenderValue) => {
  return inputArr
    .filter(element => element.gender === String(inputGenderValue))
    .map(element => new Candidate(element))
}

console.log(getCandidatesByGender(candidateArr, 'male'))
console.log(getCandidatesByGender(candidateArr, 'female'))

//tenth task
const testNumArr = [22, 15, 46, 78]

Object.defineProperty(Array.prototype, 'customReduce', {
	value: function (callback) {
	  let outputValue  = 0

    for (let i = 0; i < this.length; i++) {
      callback(outputValue = outputValue + this[i])           
    } 

    return outputValue                             
	},
	enumerable: false
})

console.log(testNumArr.customReduce((acc, item) => acc + item))

Object.defineProperty(Array.prototype, 'customJoin', {
  value: function(separator = ',') {
    let outputStr  = ''

    for (let i = 0; i < this.length; i++) {
      outputStr += this[i]
      i < this.length - 1 ? outputStr += separator : outputStr
    }

    return outputStr
  },
  enumerable: false
})

console.log(testNumArr.customJoin('*'))
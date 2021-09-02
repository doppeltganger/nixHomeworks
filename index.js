//first task
const searchCandidatesByPhoneNumber = (inputArr, inputValue) => {
  const regexValue = /[\+\(\)\-\s]/g
  return inputArr
    .filter(element => element.phone
      .replace(regexValue, '')
      .includes(inputValue.replace(regexValue, ''))
    )
}

console.log(searchCandidatesByPhoneNumber(candidateArr, '43')) 
console.log(searchCandidatesByPhoneNumber(candidateArr, '+1(869) 40'))  
console.log(searchCandidatesByPhoneNumber(candidateArr, '+1 (869)408-39-82')) 
  
//second task
const getCandidateById = (inputArr, inputId) => {
  const outputValue = inputArr.find(element => element._id === String(inputId))
  const formattedData = new Date(outputValue.registered).toLocaleDateString()
  outputValue.registered = formattedData.replace(formattedData.slice(6, 8), '')
  
  return outputValue
}

console.log(getCandidateById(candidateArr, '5e216bc9a6059760578aefa4'))

//third task
const sortCandidatesArr = (inputArr, inputSortArg) => {
  const formattedBalance = inputValue => {
    return Number.parseInt(inputValue.replace('$', ''))
  }

  if (!inputSortArg) {
    return inputArr
  }

  else {
    return [...inputArr].sort((a, b) => {
      if (inputSortArg === 'ascendingOrder')  {
        return formattedBalance(a.balance) - formattedBalance(b.balance)
      }
      else if (inputSortArg === 'descendingOrder') {
        return formattedBalance(b.balance) - formattedBalance(a.balance)
      }
    })
  }
}

console.log(sortCandidatesArr(candidateArr, 'ascendingOrder'))
console.log(sortCandidatesArr(candidateArr, 'descendingOrder'))
console.log(sortCandidatesArr(candidateArr))

//fourth task
const getEyeColorMap = inputArr => {
  const outputObjValueArr = []
  inputArr.forEach(element => {
    outputObjValueArr.push(element.eyeColor)
  })

  const outputObj = {}
  for (let eyeColor in outputObjValueArr) {
    outputObj[outputObjValueArr[eyeColor]] = inputArr.filter(element => outputObjValueArr[eyeColor] === element.eyeColor)
  }

  return outputObj
}
console.log(getEyeColorMap(candidateArr))

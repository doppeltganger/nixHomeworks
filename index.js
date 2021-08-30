//first task
for (let i = 1; i <= 10; ++i) {
  if (!(i % 3)) {
    console.log(`${i}:FizBuz`) 
  } else if (!(i % 2)) {
    console.log(`${i}:Fiz`)
  } else {
    console.log(`${i}:Buz`)
  }
}

//second task
const calculateFactorial = number => {
  let result = 1
    return (fact = () => {
      result *= number
      return number < 2 ? result : fact (--number)
    })()
}

calculateFactorial(7)

//third task
const calculateTotalAmountOfReamPaper = (sheetsInReamPaper, consumptionPerWeek, weeksAmount) => {
  let totalAmount = consumptionPerWeek * weeksAmount / sheetsInReamPaper
  
  if (!(totalAmount % 1)) {
    return totalAmount
  }
  return (totalAmount - totalAmount % 1) + 1 
}

console.log(calculateTotalAmountOfReamPaper(500, 1200, 8))

//fourth task
const calculateNumberOfPorchAndNumberOfFloor = (roomsOnFloor, floors, roomNumber) => {
  calculateNumberOfPorch = () => {
    let numberOfPorch = roomNumber / (roomsOnFloor * floors)
    if (!(numberOfPorch % 1)) {
      return numberOfPorch
    } 
    return (numberOfPorch - numberOfPorch % 1) + 1
  } 
  
  calculatenumberOfFloor = () => {
    let numberOfFloor = (roomNumber - (calculateNumberOfPorch() - 1) * roomsOnFloor * floors) / roomsOnFloor
    if (!(numberOfFloor % 1)) {
      return numberOfFloor
    } 
    return (numberOfFloor - numberOfFloor % 1) + 1
  }
  
  return `Number of your porch is ${calculateNumberOfPorch()} 
Number of your floor is ${calculatenumberOfFloor()}`
}

console.log(calculateNumberOfPorchAndNumberOfFloor(5, 9, 456))

//fifth task
const getPyramid = medianNumber => {
  for (let i = 1; i <= medianNumber; i++) {
    let pyramid = ''
    for (let j = 1; j <= (2 * medianNumber - 1); j++) {  
      if (j >= medianNumber + 1 - i && j <= medianNumber - 1 + i) {
        pyramid += '#'
      } else {
        pyramid += '-'
      }    
    }
    console.log(pyramid)
  }
}

getPyramid(8)


//first task
for (let i = 1; i <= 10; ++i) {
  console.log((i % 3 == 0) ? `${i}:FizBuz` :
  (i % 2 == 0) ? `${i}:Fiz` : `${i}:Buz`)
}

//second task with while
const calculateFactorial1 = value => {
  let factorial = 1

  while (value) factorial *= value--

  console.log(factorial)
}

calculateFactorial1(7)

//second task with for
const calculateFactorial2 = value => {
  let factorial = 1

  for (let i = value; i > 1; i--) factorial *= i

  console.log(factorial)
}

calculateFactorial2(7)

//third task
const calculateTotalAmountOfReamPaper = (sheetsInReamPaper, consumptionPerWeek, weeksAmount) => {
  let totalAmount

  (consumptionPerWeek * weeksAmount % sheetsInReamPaper == 0) ? 
    totalAmount = consumptionPerWeek * weeksAmount / sheetsInReamPaper :
    totalAmount = (consumptionPerWeek * weeksAmount - (consumptionPerWeek * weeksAmount % sheetsInReamPaper)) / sheetsInReamPaper + 1

  console.log(totalAmount) 
}

calculateTotalAmountOfReamPaper(500, 1200, 8)

//fourth task
const calculateNumberOfPorchAndNumberOfFloor = (roomsOnFloor, floors, roomNumber) => {
  let numberOfPorch
  (roomNumber % (roomsOnFloor * floors) == 0) ?
  numberOfPorch = roomNumber / (roomsOnFloor * floors) : 
  numberOfPorch = (roomNumber - roomNumber % (roomsOnFloor * floors)) / (roomsOnFloor * floors) + 1 
  
  let numberOfFloor
  ((roomNumber - (numberOfPorch - 1) * roomsOnFloor * floors) % roomsOnFloor == 0) ?
  numberOfFloor = (roomNumber - (numberOfPorch - 1) * roomsOnFloor * floors) / roomsOnFloor :
  numberOfFloor = (roomNumber - roomNumber % roomsOnFloor - (numberOfPorch - 1) * roomsOnFloor * floors) / roomsOnFloor + 1
  
  console.log(`Number of your porch is ${numberOfPorch}
Number of your floor is ${numberOfFloor}`)
}

calculateNumberOfPorchAndNumberOfFloor(3, 9, 456)

//fifth task
const getPyramid = medianNumber => {
  let pyramid = ''
  let hyphen = '-'
  let hash = '#'

  for (let i = 0; i < medianNumber; i++) {
    for (let j = 1; j < medianNumber - i; j++) {
      pyramid += hyphen
    }
    for (let j = medianNumber - 2 * i; j <= medianNumber; j++) {
      pyramid += hash
    }
    for (let j = 1; j < medianNumber - i; j++) {
      pyramid += hyphen  
    }
    pyramid += '\n'
  }
  console.log(pyramid)
}

getPyramid(8)

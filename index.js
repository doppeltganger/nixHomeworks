//first task
const getParametersSum = () => {
  let outputValue = 0
  return inputValue => {
    outputValue += inputValue
    console.log(`Your value: ${outputValue}`)
  }
}

const testFunc1 = getParametersSum()
testFunc1(5)
testFunc1(15)

//second task
const getUpdatedArr = () => {
  let outputArr = []
  return inputValue => {
    if (inputValue === undefined) {
      outputArr = []
      return  outputArr
    }
    outputArr.push(inputValue)
    return  outputArr
  }
}

const testFunc2 = getUpdatedArr()
testFunc1(5)
testFunc1(15)
testFunc1()

//third task
const getTimer = () => {
	let calledTime = 0
	let passedTime = 0
	return () => {
		if (calledTime === 0) {
			calledTime = new Date().getSeconds()
      return console.log('Enabled')
		}
		passedTime = new Date().getSeconds() - calledTime
		calledTime = new Date().getSeconds()
    return console.log(`${passedTime} seconds have passed since the last call`)
	}
}

const testFunc3 = getTimer()
testFunc3()

//fourth task
const timer = counter => {
  const timerId = setTimeout(startCounter = () => {
    if (!counter --) {
      console.log('Time End')
      return 
    } else {
        const testNumber = inputNumber => {
          return (inputNumber <= 9) ? `0${inputNumber}` : `${inputNumber}`
        }
        let minutes = ~~(counter  % 3600 / 60)
        let seconds = ~~(counter  % 60)

        console.log(`${testNumber(minutes)}:${testNumber(seconds)}`)
      }
    setTimeout(startCounter, 1000);
  }, 1000)
}

timer(180)



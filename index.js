//first task
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
}

const getCitiesAndCountriesList = (inputObj) => {
  return Object.keys(inputObj).map(key => `${key} это ${inputObj[key]}`)
}

console.log(getCitiesAndCountriesList(citiesAndCountries))

//second task
const getArray = amount => {
  if (amount < 3 || !!(amount % 3)) {
    console.error("Invalid amount")
	return
  }

const resultArr = []
let nestedArr = []
  for (let i = 1; i <= amount; i++) {
    nestedArr[nestedArr.length] = i
	  if (!(i % 3)) {
	    resultArr[resultArr.length] = nestedArr
	    nestedArr = []
	  }
  }
  return resultArr
}

console.log(getArray(9))

//third task
const namesOfDays = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

getNameOfDay = (inputObj, inputLang, inputDay) => {
    return inputObj[inputLang][inputDay - 1]
}

console.log(getNameOfDay(namesOfDays, 'en', 7))
console.log(getNameOfDay(namesOfDays, 'ru', 7))

//fourth task
const calculateMinNumbers = inputArr => {
  return inputArr
    .sort((a, b) => a - b)
    .map(item => {
      if (inputArr.length < 4 || inputArr[0] === inputArr[1] || item < 0 || item % 1) {
        console.error('Invalid arr')
        return
      }
      return item 
    }) 
    .slice(0, 2)
    .reduce((a, b) => a + b)
}

console.log(calculateMinNumbers([2, 19, 5, 3]))

calculateMinNumbers([19, 5, 42, 2, 77])

//fifth task
const getDecimal = arr => {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] * 2 ** (arr.length - 1 - i)
  }
  console.log(result)
}

getDecimal([1, 0, 0, 0, 1])


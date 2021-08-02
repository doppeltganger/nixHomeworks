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

const citiesAndCountriesList = []

const getCitiesAndCountriesList = (obj, arr) => {
  for (let property in obj) {
    arr.push(`${property} - это ${arr[property]}`)
  }
  console.log(arr) 
}

getCitiesAndCountriesList(citiesAndCountries, citiesAndCountriesList)

//second task
const getArray = amount => {
  if (typeof amount === 'number' && amount % 3 == 0) {
    const resultArray = []
    for (let i = 0; i < amount / 3; i++) {
      resultArray[i] = []
      for (let j = 0; j < 3; j++) {
        resultArray[i][j] = j + i * 3 + 1
      }
    }
  console.log(resultArray)
  }
  else console.error('Invalid amount')
}

getArray(9)

//third task
const namesOfDays = {
  ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

const getNameOfDay = (obj, lang, num) => {
  for (let property in obj) {
    if (property == lang) {
      for (let i = 0; i <= obj[property].length; ++i) {
        if (i == num) console.log(obj[property][i - 1])
      }
    }
  }
}

getNameOfDay(namesOfDays, 'en', 7)

//fourth task
const calculateMinNumbers = arr => {
  let result = arr.sort((a,b) => a - b).slice(0, 2).reduce((a, b) => a + b) 
  console.log(result)
}

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


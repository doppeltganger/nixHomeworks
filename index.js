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
  return arr
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
  return resultArray
  }
  else console.error('Invalid amount')
}

getArray(9)


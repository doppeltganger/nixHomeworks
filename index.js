//first task
const userNumber = Number(prompt('Enter your number'))

  for (let index = 1; index <= userNumber; index++) {
    const inputs = document.createElement('input')

    inputs.classList.add('input-item')
    inputs.value = `Input ${index}`

    if (index === userNumber) {
      inputs.classList.add('margin-zero')
    }

    if (index % 2) {
      document.querySelector('style').append(document.innerHTML = '.input-bg {background: yellow}')
      inputs.classList.add('input-bg')
    }

    if (!(index % 3)) {
      inputs.value = ''
      inputs.placeholder = 'Some text'
    }

    document.querySelector('.button').before(inputs)
  }
  
//second task
const startButton = document.createElement('button')
startButton.innerText = 'Start'

const stopButton = document.createElement('button')
stopButton.innerText = 'Stop'

const currentTime = document.createElement('h2')
currentTime.innerText = new Date().toLocaleTimeString()

document.body.append(startButton, stopButton, currentTime)

startButton.addEventListener('click', () => {
  const timerId = setInterval(() => {
    currentTime.innerText = new Date().toLocaleTimeString()
  }, 1000)

  stopButton.addEventListener('click', () => {
      clearInterval(timerId)
  })
})

//third task
const wrap = document.createElement('div')
wrap.id = 'wrap'

const main = document.createElement('div')
main.id = 'main'

const footer = document.createElement('div')
footer.id = 'footer'

const changeButton = document.createElement('button')
changeButton.innerText = 'Change'

const footerHeader = document.createElement('h2')
footerHeader.innerText = 'Footer'

document.body.append(wrap)
wrap.append(footer, main, changeButton)
footer.append(footerHeader)

for (let index = 1; index <= 3; index++) {
  const paragraph = document.createElement('p')
  paragraph.innerText = `Im ${index} paragraph`
  main.append(paragraph)
}

changeButton.addEventListener('click', () => {
  main.lastChild.setAttribute('style', 'background: red')
  changeButton.before(footer)
})

//Если дефолтная вёрстка без кнопки
// const changeLastParagraphColor = () => {
//   document.querySelector('#main').lastChild.setAttribute('style', 'background: red')
// }

// const changeMainAndFooterPositions = () => {
//   document.querySelector('#wrap').append(document.querySelector('#footer'))
// }

// changeLastParagraphColor()
// changeMainAndFooterPositions()

//fourth task
const ingredients = {
  'cocoa': ['cocoa powder', 'milk', 'sugar'],
  'cappuccino': ['milk', 'coffee'], 
  'smoothie': ['banana', 'orange', 'sugar'],
  'matcha frappe': ['matcha', 'milk', 'ice']
}

const menuHeader = document.createElement('h2')
menuHeader.innerText = 'Menu'

const menuList = document.createElement('ul')

document.querySelector('style').append(document.innerHTML = '.closeList {display: none} .openList {display: block}')

for (let key in ingredients) {
  const menuItem = document.createElement('li')
  menuItem.innerText = key
  menuItem.style = `cursor: pointer`
  menuList.append(menuItem)

  const itemIngredients = document.createElement('ol')
  itemIngredients.classList.add('closeList')
  menuItem.append(itemIngredients)

  ingredients[key].forEach(element => {
    const itemIngredientsList = document.createElement('li')
    itemIngredientsList.innerText = element
    itemIngredients.append(itemIngredientsList)
  }) 
}

document.body.append(menuHeader, menuList)

const createList = () => {
  let dropDownMenuItem

  const openList = target => {
    if (!dropDownMenuItem) {
      dropDownMenuItem = target
      dropDownMenuItem.classList.add('openList')
    }
    else {
      if (dropDownMenuItem === target) {
        dropDownMenuItem.classList.remove('openList')
        return dropDownMenuItem = null
      } else {
        dropDownMenuItem.classList.remove('openList')
        dropDownMenuItem = target.classList.add('openList')
      }
    }
  }

  menuList.addEventListener('click', event => {
    openList(event.target.childNodes[1])
  })
}

createList()

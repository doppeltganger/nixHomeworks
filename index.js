//first task
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let randomNumber = Math.ceil(Math.random() * 6)
    console.log(randomNumber)

    if (randomNumber === 6) {
      reject(new Error(`Exit`))
    } else {
      console.log(`Start the game...`)
      resolve(randomNumber)
    }
  }, 2000)
})

promise
  .then(response => {
    console.log((response === 1) ? `Stay here` : `"Go <number> steps`)
  })
  .catch(error => {
    throw error
  })

//second task
const goToShop = boughtProducts => {
  return Promise.resolve(boughtProducts)
}

const makeDinner = () => {
  return Promise.resolve(
    setTimeout(() => {
      console.log('Bon Appetit')
	}, 3000)
  )
}

goToShop(['bcaa', 'creatine'])
  .then(response => 
    response.length < 4 ? Promise.reject(new Error('Too low products')) : makeDinner()
  )
  .catch((error) => {
    error.name = 'Product Error'
    throw error
  })

//third task
const addCards = inputCharacters => {
  const container = document.querySelector('.container')
  container.innerHTML = ''

  inputCharacters.forEach(
    ({ name, species, status, location: { name: location }, image }) => {
      dead = status === 'Dead' ? (dead = 'dead') : null
      container.innerHTML += ` 
        <div class = "card">
        <div class="card-info">
          <div class="title">
            <h1>${name}</h1>
            <div class="status">
              <div class="live-status ${dead}"></div>
              <p>${species} -- ${status}</p>
            </div>
          </div>
          <div class="content">
            <p>${location}</p>
          </div>
        </div>
        <div class="card-image">
          <img src=${image} alt="Img"/>
        </div>
      </div>
  `
    }
  )
}

const getResponse = inputUrl => {
  fetch(inputUrl)
    .then(response => response.json())
    .then(data => {
      addCards(data.results)
    })
}

const filterCharactersById = target => {
  let filteredUrl = 'https://rickandmortyapi.com/api/character/'

  document.querySelectorAll('input')
    .forEach(element => {
      element.checked = false || element === target && target.checked 
    })

  if (target.id === 'female' || target.id === 'male') {
    filteredUrl += `?gender=${target.id}`
  } else if (target.id === 'alive' || target.id === 'dead') {
    filteredUrl += `?status=${target.id}`
  } 

  getResponse(filteredUrl)
}

const getCharactersById = () => {
	return getResponse()
}

document.forms[0].addEventListener('click', event => {
  filterCharactersById(event.target)
})
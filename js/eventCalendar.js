class Calendar {
  constructor() {
    Calendar.setCurrentDate()
    Calendar.createTimeTable()
    Calendar.renderAllEvents()
  }

  static id = 1
  static color = '#c66b3d'
  static eventsList = eventsArr.map(element => {
    element['id'] = Calendar.id++
    element['color'] = Calendar.color
    return element
  })

  static setFormattedTime(inputMinutes) {
    inputMinutes += 480
    let hours = Math.trunc(inputMinutes / 60)
    let minutes = inputMinutes % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
  }

  static parseFormattedTime(inputTimeValue) {
    const [hours, minutes] = inputTimeValue.split(':')
    return (Number(hours) - 8) * 60 + Number(minutes)
  }

  static convertTimeValue(inputTimeValue) {
    return Number(inputTimeValue.childNodes[1].textContent)
  }

  static setCurrentDate() {
    const date = new Date()

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const headerTitle = document.querySelector('h1')
    const currentDateValue = document.createElement('span')
    currentDateValue.textContent = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${days[date.getDay()]}`
    headerTitle.append(currentDateValue)
  }

  static convertColorToRGB(inputHex, inputAlphaCanal) {
    const redCanal = parseInt(inputHex.slice(1, 3), 16)
    const greenCanal = parseInt(inputHex.slice(3, 5), 16)
    const blueCanal = parseInt(inputHex.slice(5, 7), 16)

    return inputAlphaCanal ? `rgba(${redCanal}, ${greenCanal}, ${blueCanal}, ${inputAlphaCanal})` : `rgba(${redCanal}, ${greenCanal}, ${blueCanal})`
  }

  static createTimeTable() {
    const eventsTime = document.querySelector('.calendar__events-time')
    const timeTable = document.createElement('table')
    timeTable.id = 'events-time__table'

    for (let i = 0; i <= 540; i++) {
      const timeRow = document.createElement('tr')
      timeRow.setAttribute('style', 'min-width: 800px; max-width: 800px;')
      const timeData = document.createElement('td')
      const timeDataValue = document.createElement('span')

      timeData.append(Calendar.setFormattedTime(i))
      timeData.setAttribute('style', 'padding: 0 10px 0 0')

      timeDataValue.append(String(i))
      timeDataValue.classList.add('display-none')

      if (i % 30) timeData.classList.add('display-none')
      if (!(i % 60)) timeData.classList.add('fs16', 'text-center')
      if (!(i % 30) && (i % 60)) timeData.classList.add('fs12', 'text-center')

      timeRow.append(timeData, timeDataValue)
      timeTable.append(timeRow)
    }

    eventsTime.append(timeTable)
  }

  
  static removeEvents() {
    document.querySelectorAll('.calendar__events-desc').forEach(element => element.remove())
  }

  static renderAllEvents() {
    const timeValue = Array.from(document.querySelector('#events-time__table').childNodes)

    Calendar.removeEvents()

    if (Calendar.eventsList.length) {
      Calendar.eventsList.map(element => {
        const timeValueIndex = timeValue.findIndex(item => Calendar.convertTimeValue(item) === element.start)

        if (timeValueIndex === element.start) {
          if (timeValueIndex % 30) {
            const eventTime = timeValue[timeValueIndex].childNodes[0]
            eventTime.classList.remove('display-none')
            eventTime.classList.add('visibility-hidden')
          }

          const eventData = document.createElement('td')
          eventData.textContent = element.title
          eventData.classList.add('calendar__events-desc')
          eventData.setAttribute('style', `background: ${Calendar.convertColorToRGB(element.color, .2)}; border-left: 3px solid ${element.color}`)

          const eventDataValue = document.createElement('span')
          eventDataValue.classList.add('calendar__delete-button')
          eventDataValue.id = element.id

          eventData.setAttribute('rowspan', element.duration)
          eventData.append(eventDataValue)
          timeValue[timeValueIndex].append(eventData)

          Calendar.setNotification(element.start, element.title, element.duration)
        } else {
          console.error('Events should had been started at 8:00 and finished by 17:00')
        }
      })
    }
  }

  static createNotification(inputTitle, inputMessage, inputDuration) {
    const titleValue = document.createElement('p')
    titleValue.classList.add('calendar__notification__title')
    titleValue.textContent = inputTitle

    const messageValue = document.createElement('p')
    messageValue.textContent = inputMessage

    const eventNotification = document.querySelector('.calendar__notification')
    eventNotification.append(titleValue, messageValue)

    eventNotification.classList.remove('calendar__notification-hidden')
    eventNotification.classList.add('calendar__notification-visible')

    setInterval(() => {
      while (eventNotification.firstChild) {
        eventNotification.removeChild(eventNotification.firstChild)
      }
      eventNotification.classList.remove('calendar__notification-visible')
      eventNotification.classList.add('calendar__notification-hidden')
    }, inputDuration)
  }

  static setNotification(inputTime, inputTitle, inputDuration) {
    inputTime += 480
    inputDuration *= 60000
    const date = new Date()
    let currentTime =  Calendar.parseFormattedTime(`${date.getHours()}:${date.getMinutes()}`) + 480

    if (currentTime === inputTime) {
      inputTitle = `Your current task: "${inputTitle}"`
      let inputMessage = `It has been started at ${Calendar.setFormattedTime(inputTime - 480)}. Be careful!`

      Calendar.createNotification(inputTitle, inputMessage, inputDuration)
    }
  }

  addNewEvent() {
    let titleInput = document.querySelector('#form__title-input')
    let startInput = document.querySelector('#form__time-input')
    let durationInput = document.querySelector('#form__duration-input')
    let colorInput = document.querySelector('#form__color-input')

    if (titleInput.value && startInput.value && durationInput.value) {
      Calendar.eventsList.push({
        id: Calendar.id++,
        title: titleInput.value,
        start: Calendar.parseFormattedTime(startInput.value),
        duration: Number(durationInput.value),
        color: colorInput.value
      })

      Calendar.renderAllEvents()
    }

  }

  deleteCurrentEvent(inputId) {
    Calendar.eventsList = Calendar.eventsList.filter(element => element.id !== Number(inputId))
    Calendar.renderAllEvents()
  }

  updateCurrentEvent(target) {
    const updateWindow = document.createElement('div')

    const currentEventId = Number(target.childNodes[1].id)
    const currentEvent = Calendar.eventsList.find(element => element.id === currentEventId)

    const updateWindowTitle = document.createElement('input')
    updateWindowTitle.type = 'text'
    updateWindowTitle.classList.add('form__input')
    updateWindowTitle.placeholder = 'New title...'
    updateWindowTitle.value = currentEvent.title

    const updateWindowTime = document.createElement('input')
    updateWindowTime.type = 'time'
    updateWindowTime.classList.add('form__input')
    updateWindowTime.value = Calendar.setFormattedTime(currentEvent.start)

    const updateWindowDuration = document.createElement('input')
    updateWindowDuration.type = 'number'
    updateWindowDuration.classList.add('form__input')
    updateWindowDuration.placeholder = 'Duration'
    updateWindowDuration.value = currentEvent.duration

    const updateWindowColor = document.createElement('input')
    updateWindowColor.setAttribute('style', 'display: block; margin: 10px 0 0')
    updateWindowColor.type = 'color'
    updateWindowColor.value = currentEvent.color

    const updateWindowButton = document.createElement('button')
    updateWindowButton.textContent = 'Save changes'
    updateWindowButton.classList.add('button')
    updateWindowButton.setAttribute('style', 'width: 100%; margin: 10px 0 0')

    updateWindow.append(updateWindowTitle, updateWindowTime, updateWindowDuration, updateWindowColor, updateWindowButton)
    target.append(updateWindow)

    updateWindowButton.addEventListener('click', () => {
      Calendar.eventsList.map(element => {
        if (element.id === currentEventId) {
          if (updateWindowTitle.value && updateWindowTime.value && updateWindowDuration.value) {
            element.title = updateWindowTitle.value
            element.start = Calendar.parseFormattedTime(updateWindowTime.value)
            element.duration = Number(updateWindowDuration.value)
            element.color = updateWindowColor.value

            updateWindow.remove()
            Calendar.renderAllEvents()
          }
        }
      })
    })
  }
}
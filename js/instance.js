//create instance
const eventCalendar = new Calendar()

//add listener to form button
newEventButton = document.querySelector(`#form__add-button`)
newEventButton.addEventListener('click', (event) => {
  event.preventDefault()
  eventCalendar.addNewEvent()
})

//add listener to time table
const table = document.querySelector('#events-time__table')

table.addEventListener('click', (event) => {
  if (event.target.tagName === 'table') return
  if (event.target.classList.value === 'calendar__delete-button') eventCalendar.deleteCurrentEvent(event.target.id)
})

table.addEventListener('dblclick', (event) => {
  if (event.target.tagName === 'table') return
  eventCalendar.updateCurrentEvent(event.target)
})


setInterval(setClock, 1000)


const handHours = document.querySelector('[data-hand-hours]');
const handMinutes = document.querySelector('[data-hand-minutes]')
const handSecond = document.querySelector('[data-hand-second]')


function setClock() 
{
  const currentDate = new Date()
  const secondRatio = currentDate.getSeconds() / 60 
  const minutesRatio = (secondRatio + currentDate.getMinutes()) / 60 
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 

  setRotation(handSecond, secondRatio)
   setRotation(handMinutes, minutesRatio)
    setRotation(handHours, hoursRatio)
}

function setRotation(element, rotationRatio)
{
  element.style.setProperty('--rotation' , rotationRatio * 360)
}

setClock()
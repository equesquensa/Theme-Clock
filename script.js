
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const checkbox = document.getElementById('checkbox1')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

checkbox.addEventListener('change', () => {

  const html = document.querySelector('html')
  
  html.classList.toggle('dark')

  // const body = document.querySelector('body')
  //   body.classList.toggle('dark')

  //   if(body.classList.contains('dark')) {
  //     body.style.backgroundImage ='url("img/hpblack.jpg")'
  //   } else {
  //       body.style.backgroundImage = 'url("img/hpwhite.jpg")'
  //   }
  
})


const time = new Date()
const month = time.getMonth()
const day = time.getDay()
const date = time.getDate()
const hours = time.getHours()
//const hoursForClock = hours % 12
const minutes = time.getMinutes()
const seconds = time.getSeconds()

let hoursPosition = (hours * 360/12) + (minutes * (360/60)/12)
let minutesPosition = (minutes * 360/60) + (seconds * (360/60)/60)
let secondsPosition = seconds * 360/60

function setTime() {

    secondsPosition = secondsPosition + (360/60)
    minutesPosition = minutesPosition + (1/60) * (360/60)
    hoursPosition = hoursPosition + (30/3600)

    hourEl.style.transform = `translate(-50%, -100%) rotate(${hoursPosition}deg`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minutesPosition}deg`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${secondsPosition}deg`;

    let digitalTime = new Date()
    let digitalMinutes = digitalTime.getMinutes()
    let theHour = digitalTime.getHours()
    let digitalHours = theHour % 12 === 0 ? '12' :  theHour % 12
    ampm = theHour >= 12 ? 'P.M.' : 'A.M.'


    timeEl.innerHTML = `${digitalHours < 10 ? `0${digitalHours}`:digitalHours}:${digitalMinutes < 10 ? `0${digitalMinutes}` : digitalMinutes} <span$ class="am">${ampm}</span$>`

    dateEl.innerHTML = `${days[day]}, <span$ class="circle">${date}</span$> ${months[month]}  `
}

setTime()

setInterval(setTime, 1000)
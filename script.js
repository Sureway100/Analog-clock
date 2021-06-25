//for every 1000 miniseconds call setclock function
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date()
    //console.log('currentDate ' + currentDate);
    const secondsRatio = currentDate.getSeconds() / 60
    //console.log('secondsRatio ' + secondsRatio);
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
   // console.log('minutesRatio ' + minutesRatio);
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
   // console.log('hoursRatio ' + hoursRatio);

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();


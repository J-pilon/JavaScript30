const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
const digitalSeconds = document.querySelector('.digital-sec');
const digitalMinutes = document.querySelector('.digital-min');
const digitalHours = document.querySelector('.digital-hour');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = ((hours / 12) * 360) + 90;

  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  digitalSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  digitalMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  digitalHours.innerHTML = hours < 10 ? `0${hours}` : hours;
}

setInterval(setDate, 1000);

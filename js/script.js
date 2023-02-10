import Countdown from './modules/countdown.js';

const timeDiff = new Countdown('10 March 2023 16:00:00 GMT-0300');

setInterval(() => {
  days.innerText = timeDiff.total.days;
  hours.innerText = timeDiff.total.hours;
  minutes.innerText = timeDiff.total.minutes;
  seconds.innerText = timeDiff.total.seconds;
}, 1000);

const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

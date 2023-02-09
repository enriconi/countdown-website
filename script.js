import Countdown from './countdown.js';

const mariaBirthdayDiff = new Countdown('15 February 2023 00:00:00 GMT-0300');

setInterval(() => {
  days.innerText = mariaBirthdayDiff.total.days;
  hours.innerText = mariaBirthdayDiff.total.hours;
  minutes.innerText = mariaBirthdayDiff.total.minutes;
  seconds.innerText = mariaBirthdayDiff.total.seconds;
}, 1000);

const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

import Countdown from './modules/countdown.js';

const selectedDate = document.querySelector('#selectedDate');
const timer = document.querySelector('.timer');

const changeDate = () => {
  const timeDiff = new Countdown(new Date(selectedDate.value));

  const days = document.querySelector('#days');
  const hours = document.querySelector('#hours');
  const minutes = document.querySelector('#minutes');
  const seconds = document.querySelector('#seconds');

  setInterval(() => {
    days.innerText = timeDiff.total.days;
    hours.innerText = timeDiff.total.hours;
    minutes.innerText = timeDiff.total.minutes;
    seconds.innerText = timeDiff.total.seconds;
  }, 1000);
};

selectedDate.addEventListener('change', changeDate);

const btn = document.querySelector('.btn-toggle');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  selectedDate.classList.toggle('dark-theme');
  timer.classList.toggle('dark-theme');
  btn.classList.toggle('dark-theme');
});

window.addEventListener('load', () => {
  const currentData = new Date();

  currentData.setMinutes(
    currentData.getMinutes() - currentData.getTimezoneOffset(),
  );
  currentData.setMilliseconds(null);
  currentData.setSeconds(null);

  selectedDate.value = currentData.toISOString().slice(0, -1);
});

document.addEventListener('DOMContentLoaded', () => {
  if (selectedDate.value !== '') {
    console.log('A data já está preenchida!');
  } else {
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    days.innerText = '--';
    hours.innerText = '--';
    minutes.innerText = '--';
    seconds.innerText = '--';
  }
});

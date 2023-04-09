import Countdown from './modules/countdown.js';

const selectedDate = document.querySelector('#selectedDate');
const timer = document.querySelector('.timer');
let countdownInterval;

const changeDate = () => {
  const timeDiff = new Countdown(new Date(selectedDate.value));

  const days = document.querySelector('#days');
  const hours = document.querySelector('#hours');
  const minutes = document.querySelector('#minutes');
  const seconds = document.querySelector('#seconds');

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
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

const now = new Date();
const nowFormatted = now.toISOString().slice(0, 16);
selectedDate.min = nowFormatted;

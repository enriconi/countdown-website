import Countdown from './modules/countdown.js';

const selectedDate = document.querySelector('#selectedDate');

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

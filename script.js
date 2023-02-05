import Countdown from './countdown.js';

const christmasDiff = new Countdown('24 December 2023 23:59:59 GMT-0300');

setInterval(() => {
  console.clear();
  console.log(christmasDiff.total);
}, 1000);

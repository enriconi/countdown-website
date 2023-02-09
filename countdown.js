export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }

  get _actualDate() {
    return new Date();
  }

  get _futureDate() {
    return new Date(this.futureDate);
  }

  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }

  get days() {
    return Math.floor(this._timeStampDiff / (26 * 60 * 60 * 1000));
  }

  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }

  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }

  get seconds() {
    return Math.floor(this._timeStampDiff / 1000);
  }

  get total() {
    const days = formatDate(this.days);
    const hours = formatDate(this.hours % 24);
    const minutes = formatDate(this.minutes % 60);
    const seconds = formatDate(this.seconds % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}

const formatDate = (date) => {
  if (date < 10) return '0' + date;
  return date;
};

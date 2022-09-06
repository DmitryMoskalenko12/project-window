function timer(deadline, selector) {

  function getTime() {
    const t = Date.parse(deadline) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60)) % 24),
          minutes = Math.floor((t / 1000 / 60 ) % 60),
          seconds = Math.floor((t / 1000) % 60);

    return {
    time: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
    }

  }
  function setZero(num) {
    if (num < 10) {
     return `0${num}`;
    }else{
     return num;
    }
  }
 
  function getTimeSelector() {

    const parent = document.querySelector(selector),
          days = parent.querySelector('#days'),
          hours = parent.querySelector('#hours'),
          minutes = parent.querySelector('#minutes'),
          seconds = parent.querySelector('#seconds'),
          timeInterval = setInterval(setTime, 1000);
          setTime();

   function setTime() {
   const allTime = getTime();
   if (allTime.time <= 0) {
    days.textContent = '00';
    hours.textContent = '00';
    minutes.textContent = '00';
    seconds.textContent = '00';
   }else{
    days.textContent = setZero(allTime.days);
    hours.textContent = setZero(allTime.hours);
    minutes.textContent = setZero(allTime.minutes);
    seconds.textContent = setZero(allTime.seconds);
   }
   
    if (allTime.time <= 0 ) {
      clearInterval(timeInterval);
    }
   }
  }
  getTimeSelector();
}
export default timer;
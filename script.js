let newYear = "31 dec 2021";

let x = 0;

function countdown() {
  let maxDate = new Date(newYear);
  let currentDate = new Date();

  let totalSeconds = (maxDate - currentDate) / 1000;

  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600) % 24;
  let minutes = Math.floor(totalSeconds / 60) % 60;
  let seconds = formatTime(Math.floor(totalSeconds % 60));

  console.log(days, hours, minutes, seconds);

  // var seconds = new Date().getTime() / 1000;
  // console.log(Math.floor(seconds));
//   if (++x === 5) {
//     clearInterval(countdownStarts);
//   }
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();
const countdownStarts = setInterval(countdown, 1000);

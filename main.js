const salvation = 1781263800000;
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = document.getElementById("timer");

function salvationTimer() {
  let currenTime = new Date().getTime();
  let timeToSalvation = salvation - currenTime;
  formatMilliseconds(timeToSalvation);
  console.log(
    days + ":" + hours + ":" + minutes + ":" + seconds + ":" + milliseconds
  );
  timer.textContent =
    days + ":" + hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
  requestAnimationFrame(salvationTimer); // recursivity fuck yee
}

function formatMilliseconds(ms) {
  const millisecondsPerSecond = 1000;
  const secondsPerMinute = 60;
  const minutesPerHour = 60;
  const hoursPerDay = 24;

  // Calculate each component
  days = Math.floor(
    ms /
      (millisecondsPerSecond * secondsPerMinute * minutesPerHour * hoursPerDay)
  );
  hours = Math.floor(
    (ms %
      (millisecondsPerSecond *
        secondsPerMinute *
        minutesPerHour *
        hoursPerDay)) /
      (millisecondsPerSecond * secondsPerMinute * minutesPerHour)
  );
  minutes = Math.floor(
    (ms % (millisecondsPerSecond * secondsPerMinute * minutesPerHour)) /
      (millisecondsPerSecond * secondsPerMinute)
  );
  seconds = Math.floor(
    (ms % (millisecondsPerSecond * secondsPerMinute)) / millisecondsPerSecond
  );
  milliseconds = ms % millisecondsPerSecond;
}
requestAnimationFrame(salvationTimer);

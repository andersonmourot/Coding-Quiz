

var timerEl = document.getElementById('time')


function setTime() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {

      if (timeLeft > 1) {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;

      } else if (timeLeft === 1) {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft--;

      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }

    }, 1000);
  }

  setTime();
// state
var timer = null;
var remaining = 0; // seconds
var inBreak = false;
var sessionTotal = 0; // seconds for current session

function onPageLoad() {
  updateDisplay();
}

function updateDisplay() {
  var mins = Math.floor(remaining / 60);
  var secs = remaining % 60;
  document.getElementById('time-display').textContent =
    (mins < 10 ? '0' + mins : mins) + ':' +
    (secs < 10 ? '0' + secs : secs);
  // show current session type
  document.getElementById('session-label').textContent = inBreak ? 'Break' : 'Work';
  // update progress bar
  var fill = document.getElementById('progress-fill');
  if (sessionTotal > 0) {
    var perc = ((sessionTotal - remaining) / sessionTotal) * 100;
    fill.style.width = perc + '%';
  } else {
    fill.style.width = '0%';
  }
}

function startTimer() {
  var workInput = document.getElementById('work-duration');
  var breakInput = document.getElementById('break-duration');
  if (remaining === 0) {
    // initialize
    var minutes = inBreak ? parseInt(breakInput.value, 10) : parseInt(workInput.value, 10);
    remaining = minutes * 60;
    sessionTotal = remaining;
  }

  // disable inputs while timer runs
  document.getElementById('work-duration').disabled = true;
  document.getElementById('break-duration').disabled = true;
  document.body.classList.add('running');
  document.getElementById('start-button').disabled = true;
  document.getElementById('pause-button').disabled = false;
  document.getElementById('reset-button').disabled = false;

  timer = setInterval(tick, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
  document.getElementById('start-button').disabled = false;
  document.getElementById('pause-button').disabled = true;
  // keep settings hidden but inputs remain disabled
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  remaining = 0;
  sessionTotal = 0;
  document.getElementById('start-button').disabled = false;
  document.getElementById('pause-button').disabled = true;
  document.getElementById('reset-button').disabled = true;
  updateDisplay();
  // re-enable settings
  document.getElementById('work-duration').disabled = false;
  document.getElementById('break-duration').disabled = false;
  document.body.classList.remove('running');
}

// helper for +/- controls in settings
function changeDuration(which, delta) {
  var el = document.getElementById(which + '-duration');
  if (!el) return;
  var newVal = parseInt(el.value, 10) + delta;
  if (newVal < 1) newVal = 1;
  el.value = newVal;
}

function tick() {
  if (remaining > 0) {
    remaining--;
    updateDisplay();
  } else {
    clearInterval(timer);
    timer = null;
    showMessage(inBreak ? 'Break over' : 'Work session complete', 3000);
    inBreak = !inBreak;
    remaining = 0;
    document.getElementById('start-button').disabled = false;
    document.getElementById('pause-button').disabled = true;
    document.getElementById('reset-button').disabled = true;
    // session ended; allow settings again
    document.getElementById('work-duration').disabled = false;
    document.getElementById('break-duration').disabled = false;
    document.body.classList.remove('running');
  }
}

// display transient message similar to KWordle
function showMessage(message, timeout) {
  var el = document.getElementById('message');
  if (!el) return;
  el.textContent = message;
  el.style.display = 'block';
  setTimeout(function() {
    el.style.display = 'none';
  }, timeout || 2000);
}

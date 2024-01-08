const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
let startTime = 0;
let stopTime = 0;
let timerId;

// 時間の表示
const displayTime = () => {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const m = String(currentTime.getMinutes()).padStart(2, "0");
  const s = String(currentTime.getSeconds()).padStart(2, "0");
  const ms = String(currentTime.getMilliseconds()).padStart(3, "0");

  timer.textContent = `${m}:${s}.${ms}`;
  timerId = setTimeout(displayTime, 10);
};

// スタートボタン
startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = true;
  startTime = Date.now();
  displayTime();
});

// ストップボタン
stopBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
  clearTimeout(timerId);
  stopTime += Date.now() - startTime;
});

// リセットボタン
resetBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
  timer.textContent = "00:00.000";
  stopTime = 0;
});

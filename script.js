
function updateTimeAndDay() {
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const utcSeconds = now.getUTCSeconds();
  const utcDay = days[now.getUTCDay()];


  const formatNumber = (num) => num < 10 ? '0' + num : num;
  const timeString = `${formatNumber(utcHours)}:${formatNumber(utcMinutes)}:${formatNumber(utcSeconds)}`;

  document.querySelector('[data-testid="currentTimeUTC"]').textContent = timeString;
  document.querySelector('[data-testid="currentDay"]').textContent = utcDay;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);

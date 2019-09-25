"use strict";

//Run the clock function
runClock();
setInterval("runClock()", 1000);

function runClock() {
  /**Stores the current date and time */
  let currentDay = new Date();
  let dateStr = currentDay.toDateString();
  let timeStr = currentDay.toLocaleString();

  /**Display the current date and time */
  document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

  /** Calculate the date and time */
  let newYear = new Date("September 26, 2018");
  let nextYear = currentDay.getFullYear() + 1;
  newYear.setFullYear(nextYear);
  let daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

  /**Calculate the hours left  */
  let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

  /**Calculate the minute and seconds  */
  let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
  let secLeft = (minsLeft - Math.floor(minsLeft)) * 60;

  /**Display current time */
  document.getElementById("days").textContent = Math.floor(daysLeft);

  document.getElementById("hrs").textContent = Math.floor(hrsLeft);
  document.getElementById("mins").textContent = Math.floor(minsLeft);
  document.getElementById("secs").textContent = Math.floor(secLeft);

  
}

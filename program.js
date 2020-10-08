import {
  createNewClockHTML,
  wallElement,
  setTimeOnClock,
  getCurrentTimeInTimezone,
} from "/do-not-edit/clockDOMUtilities.js";

// import {Clock, LiveClock} from "/Clock.js";

const eastCoastClock = document.createElement("div");
eastCoastClock.innerHTML = createNewClockHTML("The Big Apple");
setTimeOnClock(eastCoastClock, getCurrentTimeInTimezone("America/New_York"));
wallElement.appendChild(eastCoastClock);
setTimeout(() => {
  eastCoastClock.remove();
}, 15000);
/*
const eastCoast = new Clock(
    "The Big Apple",
    "America/New_York"
);
eastCoast.hangOnWall();
setTimeout(() => {
    eastCoast.takeOffWall();
}, 10000);
*/

const westCoastClock = document.createElement("div");
westCoastClock.innerHTML = createNewClockHTML("a/A HQ");
setTimeOnClock(westCoastClock, getCurrentTimeInTimezone("America/Los_Angeles"));
wallElement.appendChild(westCoastClock);

/*
const westCoast = new LiveClock(
    "a/A HQ",
    "America/Los_Angeles"
);
westCoast.hangOnWall();
*/

let clockRunningInterval = setInterval(() => {
  setTimeOnClock(
    westCoastClock,
    getCurrentTimeInTimezone("America/Los_Angeles")
  );
}, 1000);
setTimeout(() => {
  clearInterval(clockRunningInterval);
}, 5000);
setTimeout(() => {
  clockRunningInterval = setInterval(() => {
    setTimeOnClock(
      westCoastClock,
      getCurrentTimeInTimezone("America/Los_Angeles")
    );
  }, 1000);
}, 10000);
setTimeout(() => {
  westCoastClock.remove();
  clearInterval(clockRunningInterval);
}, 15000);
/* 
setTimeout(() => {
    westCoast.stop();
}, 5000);
setTimeout(() => {
    westCoast.resume();
}, 10000);
setTimeout(() => {
    westCoast.takeOffWall();
}, 15000);
*/

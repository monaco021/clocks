import worldTimezones from "/do-not-edit/world-timezones.js";

export const wallElement = document.querySelector("#wall");

export const createNewClockHTML = (regionName) => {
  return `
        <div class="clock">
            <h1 class="clock-time"></h1>
            <h3 class="clock-region">${regionName}</h3>
        </div>
    `;
};

export const setTimeOnClock = (clockElement, newTime) => {
  const timeElement = clockElement.querySelector(".clock-time");
  timeElement.innerText = newTime;
};

export const getCurrentTimeInTimezone = (timezone) => {
  if (!worldTimezones.includes(timezone)) {
    throw new Error(`${timezone} is not a valid timezone. Sowwiez!`);
  }

  const rawTimeString = new Date().toLocaleString("en-US", {
    timeZone: timezone,
  }).split(",")[1].slice(1);

  return rawTimeString;

};

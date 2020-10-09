import {
    createNewClockHTML,
    setTimeOnClock,
    getCurrentTimeInTimezone,
    wallElement
} from "/do-not-edit/clockDOMUtilities.js";

export class Clock {
    constructor(region, timezone) {
        this.region = region;
        this.timezone = timezone;
        this.element = document.createElement("div");
        this.element.innerHTML = createNewClockHTML(this.region);
    }
    hangOnWall() {
        wallElement.appendChild(this.element);
    }
    takeOffWall() {
        this.element.remove();
    }
    setTime() {
        setTimeOnClock(
            this.element, 
            getCurrentTimeInTimezone(this.timezone)
        );
    }
}

export class LiveClock extends Clock {
    constructor(region, timezone) {
        super(region, timezone);
        this.start();
    }
    start() {
        this.runningInterval = setInterval(() => {
            this.setTime();
        }, 1000);
    }
    stop() {
        clearInterval(this.runningInterval);
    }
    resume() {
        this.start();
    }
}
/*
==========================================================
FIELD STATION
Clock

Observation Deck RC2
Phase 01
==========================================================
*/

export class Clock {

    constructor(options = {}) {

        /*
        --------------------------------------------------
        Simulation
        --------------------------------------------------
        */

        this.timeScale =
            options.timeScale ?? 1;

        this.running = false;

        /*
        --------------------------------------------------
        Calendar
        --------------------------------------------------
        */

        this.dayOfYear =
            options.dayOfYear ?? 172;

        this.year =
            options.year ?? new Date().getFullYear();

        /*
        --------------------------------------------------
        Time of Day
        --------------------------------------------------
        */

        this.hour =
            options.hour ?? 8;

        this.minute =
            options.minute ?? 0;

        this.second =
            options.second ?? 0;

    }

    /*
    ------------------------------------------------------
    Initialization
    ------------------------------------------------------
    */

    initialize() {

        this.running = true;

        console.log("🕒 Clock Ready");

    }

    /*
    ------------------------------------------------------
    Update
    ------------------------------------------------------
    */

    update(deltaTime) {

        if (!this.running) {

            return;

        }

        this.second +=
            deltaTime * this.timeScale;

        while (this.second >= 60) {

            this.second -= 60;

            this.minute++;

        }

        while (this.minute >= 60) {

            this.minute -= 60;

            this.hour++;

        }

        while (this.hour >= 24) {

            this.hour -= 24;

            this.dayOfYear++;

        }

        if (this.dayOfYear > 365) {

            this.dayOfYear = 1;

            this.year++;

        }

    }

    /*
    ------------------------------------------------------
    Time
    ------------------------------------------------------
    */

    setTime(hour, minute = 0) {

        this.hour = hour;

        this.minute = minute;

        this.second = 0;

    }

    getTime() {

        return {

            hour: this.hour,

            minute: this.minute,

            second: this.second

        };

    }

    /*
    ------------------------------------------------------
    Day
    ------------------------------------------------------
    */

    setDay(day) {

        this.dayOfYear = day;

    }

    /*
    ------------------------------------------------------
    Seasons
    ------------------------------------------------------
    */

    getSeason() {

        if (this.dayOfYear < 80) return "winter";

        if (this.dayOfYear < 172) return "spring";

        if (this.dayOfYear < 266) return "summer";

        if (this.dayOfYear < 355) return "autumn";

        return "winter";

    }

    /*
    ------------------------------------------------------
    Day Period
    ------------------------------------------------------
    */

    getDayPeriod() {

        const h = this.hour;

        if (h < 5) return "night";

        if (h < 7) return "dawn";

        if (h < 11) return "morning";

        if (h < 16) return "afternoon";

        if (h < 19) return "golden-hour";

        if (h < 21) return "blue-hour";

        return "night";

    }

    /*
    ------------------------------------------------------
    Resize
    ------------------------------------------------------
    */

    resize() {

        // Reserved for future use.

    }

    /*
    ------------------------------------------------------
    Shutdown
    ------------------------------------------------------
    */

    destroy() {

        this.running = false;

        console.log("🕒 Clock Shutdown");

    }

}
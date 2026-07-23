/*
==========================================================
FIELD STATION
Lighting

Observation Deck RC2
Phase 01
==========================================================
*/

export class Lighting {

    constructor(options = {}) {

        /*
        --------------------------------------------------
        Global Light
        --------------------------------------------------
        */

        this.ambientIntensity =
            options.ambientIntensity ?? 0.75;

        this.sunIntensity =
            options.sunIntensity ?? 1.00;

        this.skylightIntensity =
            options.skylightIntensity ?? 0.60;

        /*
        --------------------------------------------------
        Environmental Effects
        --------------------------------------------------
        */

        this.cloudShadow =
            options.cloudShadow ?? 0.0;

        this.fogDensity =
            options.fogDensity ?? 0.0;

        this.dustVisibility =
            options.dustVisibility ?? 0.25;

        /*
        --------------------------------------------------
        Color Temperature
        --------------------------------------------------
        */

        this.colorTemperature =
            options.colorTemperature ?? 5600;

        /*
        --------------------------------------------------
        Internal State
        --------------------------------------------------
        */

        this.initialized = false;

    }

    /*
    ------------------------------------------------------
    Initialization
    ------------------------------------------------------
    */

    initialize() {

        this.initialized = true;

        console.log("☀ Lighting Ready");

    }

    /*
    ------------------------------------------------------
    Update
    ------------------------------------------------------
    */

    update(deltaTime) {

        if (!this.initialized) {

            return;

        }

        // Future:
        // Read Clock
        // Calculate solar angle
        // Animate cloud shadows
        // Update interior lighting

    }

    /*
    ------------------------------------------------------
    Presets
    ------------------------------------------------------
    */

    setMorning() {

        this.sunIntensity = 1.0;

        this.skylightIntensity = 0.65;

        this.ambientIntensity = 0.75;

        this.colorTemperature = 5200;

    }

    setAfternoon() {

        this.sunIntensity = 1.15;

        this.skylightIntensity = 0.55;

        this.ambientIntensity = 0.82;

        this.colorTemperature = 6100;

    }

    setGoldenHour() {

        this.sunIntensity = 0.85;

        this.skylightIntensity = 0.35;

        this.ambientIntensity = 0.58;

        this.colorTemperature = 3900;

    }

    setBlueHour() {

        this.sunIntensity = 0.18;

        this.skylightIntensity = 0.42;

        this.ambientIntensity = 0.35;

        this.colorTemperature = 8000;

    }

    setNight() {

        this.sunIntensity = 0.0;

        this.skylightIntensity = 0.08;

        this.ambientIntensity = 0.18;

        this.colorTemperature = 9500;

    }

    /*
    ------------------------------------------------------
    Environment
    ------------------------------------------------------
    */

    setCloudShadow(value) {

        this.cloudShadow =
            Math.max(0, Math.min(1, value));

    }

    setFogDensity(value) {

        this.fogDensity =
            Math.max(0, Math.min(1, value));

    }

    setDustVisibility(value) {

        this.dustVisibility =
            Math.max(0, Math.min(1, value));

    }

    /*
    ------------------------------------------------------
    Accessors
    ------------------------------------------------------
    */

    getState() {

        return {

            ambientIntensity:
                this.ambientIntensity,

            sunIntensity:
                this.sunIntensity,

            skylightIntensity:
                this.skylightIntensity,

            cloudShadow:
                this.cloudShadow,

            fogDensity:
                this.fogDensity,

            dustVisibility:
                this.dustVisibility,

            colorTemperature:
                this.colorTemperature

        };

    }

    /*
    ------------------------------------------------------
    Resize
    ------------------------------------------------------
    */

    resize() {

        // Reserved.

    }

    /*
    ------------------------------------------------------
    Shutdown
    ------------------------------------------------------
    */

    destroy() {

        this.initialized = false;

        console.log("☀ Lighting Shutdown");

    }

}
/*
==========================================================
FIELD STATION
Camera

Observation Deck RC2
Phase 01
==========================================================
*/

export class Camera {

    constructor(options = {}) {

        /*
        --------------------------------------------------
        Physical Properties
        --------------------------------------------------
        */

        this.eyeHeight =
            options.eyeHeight ?? 1.65;

        this.fieldOfView =
            options.fieldOfView ?? 60;

        /*
        --------------------------------------------------
        Position
        --------------------------------------------------
        */

        this.position = {

            x: 0,
            y: this.eyeHeight,
            z: 0

        };

        /*
        --------------------------------------------------
        Target Position
        --------------------------------------------------
        */

        this.target = {

            x: this.position.x,
            y: this.position.y,
            z: this.position.z

        };

        /*
        --------------------------------------------------
        Rotation
        --------------------------------------------------
        */

        this.rotation = {

            pitch: 0,
            yaw: 0,
            roll: 0

        };

        /*
        --------------------------------------------------
        Motion
        --------------------------------------------------
        */

        this.moveSpeed = 2.5;

        this.smoothing = 0.08;

    }

    /*
    ------------------------------------------------------
    Initialization
    ------------------------------------------------------
    */

    initialize() {

        console.log("📷 Camera Ready");

    }

    /*
    ------------------------------------------------------
    Update
    ------------------------------------------------------
    */

    update(deltaTime) {

        this.position.x +=
            (this.target.x - this.position.x)
            * this.smoothing;

        this.position.y +=
            (this.target.y - this.position.y)
            * this.smoothing;

        this.position.z +=
            (this.target.z - this.position.z)
            * this.smoothing;

    }

    /*
    ------------------------------------------------------
    Move Camera
    ------------------------------------------------------
    */

    moveTo(x, y = this.eyeHeight, z = 0) {

        this.target.x = x;

        this.target.y = y;

        this.target.z = z;

    }

    /*
    ------------------------------------------------------
    Instantly Move
    ------------------------------------------------------
    */

    setPosition(x, y = this.eyeHeight, z = 0) {

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;

        this.target.x = x;
        this.target.y = y;
        this.target.z = z;

    }

    /*
    ------------------------------------------------------
    Rotation
    ------------------------------------------------------
    */

    lookAt(pitch = 0, yaw = 0, roll = 0) {

        this.rotation.pitch = pitch;

        this.rotation.yaw = yaw;

        this.rotation.roll = roll;

    }

    /*
    ------------------------------------------------------
    Resize
    ------------------------------------------------------
    */

    resize() {

        // Reserved for future camera calculations.

    }

    /*
    ------------------------------------------------------
    Shutdown
    ------------------------------------------------------
    */

    destroy() {

        console.log("📷 Camera Shutdown");

    }

}
/*
==========================================================
FIELD STATION
Room Renderer

Observation Deck RC2
Phase 01
==========================================================
*/

import { Camera } from "./camera.js";
import { Clock } from "./clock.js";
import { Lighting } from "./lighting.js";
import { Materials } from "./materials.js";
import { Layers } from "./layers.js";

export class RoomRenderer {

    constructor(room, options = {}) {

        this.room = room;

        /*
        --------------------------------------------------
        Room Callback
        --------------------------------------------------
        */

        this.onUpdate = null;

        this.options = options;

        this.running = false;

        this.lastFrame = 0;

        /*
        --------------------------------------------------
        Core Systems
        --------------------------------------------------
        */

        this.camera = new Camera();

        this.clock = new Clock();

        this.materials = new Materials();

        this.lighting = new Lighting();

        this.layers = new Layers();

    }

    /*
    ------------------------------------------------------
    Initialization
    ------------------------------------------------------
    */

    initialize() {

        console.group("🌿 Room Renderer");

        this.camera.initialize();

        this.clock.initialize();

        this.materials.initialize();

        this.lighting.initialize();

        this.layers.initialize();

        this.running = true;

        console.log("Renderer Ready");

        console.groupEnd();

        requestAnimationFrame(
            (time) => this.update(time)
        );

    }

    /*
    ------------------------------------------------------
    Main Loop
    ------------------------------------------------------
    */

    update(time) {

        if (!this.running) {

            return;

        }

        const deltaTime =

            (time - this.lastFrame) / 1000;

        this.lastFrame = time;

        this.clock.update(deltaTime);

        this.camera.update(deltaTime);

        this.lighting.update(deltaTime);

        this.layers.update(deltaTime);

        /**************************************************
        Room Update
        **************************************************/

        if (typeof this.onUpdate === "function") {

            this.onUpdate(deltaTime);

        }

        requestAnimationFrame(
            (next) => this.update(next)
        );

    }

    /*
    ------------------------------------------------------
    Window Resize
    ------------------------------------------------------
    */

    resize() {

        this.camera.resize();

        this.lighting.resize();

        this.layers.resize();

    }

    /*
    ------------------------------------------------------
    Shutdown
    ------------------------------------------------------
    */

    destroy() {

        this.running = false;

        this.camera.destroy();

        this.clock.destroy();

        this.lighting.destroy();

        this.layers.destroy();

    }

}
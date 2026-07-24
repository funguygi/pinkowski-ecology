/*
==========================================================
FIELD STATION

Observation Deck

Observation Deck RC2
Phase 01.5
==========================================================
*/

import {

    RoomRenderer

} from "../../engine/room-renderer/index.js";

export class ObservationDeck {

    constructor(root) {

        this.root = root;

        this.renderer =
            new RoomRenderer(root);

        this.initialized = false;

        this.handleResize =
            this.handleResize.bind(this);

    }

    /*
    ------------------------------------------------------
    Initialization
    ------------------------------------------------------
    */

    initialize() {

        if (this.initialized) {

            return;

        }

        this.renderer.onUpdate =
            (deltaTime) => {

                this.update(deltaTime);

            };

        this.renderer.initialize();

        window.addEventListener(

            "resize",

            this.handleResize,

            { passive: true }

        );

        this.initialized = true;

        console.log(
            "🌲 Observation Deck Ready"
        );

    }

    /*
    ------------------------------------------------------
    Frame Update

    Temporary.

    Existing room animation code will
    gradually move into this method.
    ------------------------------------------------------
    */

    update(deltaTime) {

        // Placeholder

    }

    /*
    ------------------------------------------------------
    Resize
    ------------------------------------------------------
    */

    handleResize() {

        this.renderer.resize();

    }

    /*
    ------------------------------------------------------
    Shutdown
    ------------------------------------------------------
    */

    destroy() {

        if (!this.initialized) {

            return;

        }

        window.removeEventListener(

            "resize",

            this.handleResize

        );

        this.renderer.destroy();

        this.initialized = false;

        console.log(
            "🌲 Observation Deck Shutdown"
        );

    }

}
/*
==========================================================
FIELD STATION
Layers

Observation Deck RC2
Phase 01
==========================================================
*/

export class Layers {

    constructor() {

        this.registry = {};

    }

    /*
    ------------------------------------------------------
    Initialization
    ------------------------------------------------------
    */

    initialize() {

        this.registry = {

            background: 0,

            sky: 100,

            architecture: 200,

            landscape: 300,

            furniture: 400,

            scientificObjects: 500,

            livingSystems: 600,

            atmosphere: 700,

            interaction: 800,

            overlay: 900

        };

        console.log("🗂️ Layers Ready");

    }

    /*
    ------------------------------------------------------
    Update
    ------------------------------------------------------
    */

    update(deltaTime) {

        // Reserved for future dynamic layers.

    }

    /*
    ------------------------------------------------------
    Lookup
    ------------------------------------------------------
    */

    get(name) {

        return this.registry[name];

    }

    /*
    ------------------------------------------------------
    Register
    ------------------------------------------------------
    */

    register(name, value) {

        this.registry[name] = value;

    }

    /*
    ------------------------------------------------------
    List
    ------------------------------------------------------
    */

    list() {

        return Object.entries(this.registry);

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

        this.registry = {};

        console.log("🗂️ Layers Shutdown");

    }

}
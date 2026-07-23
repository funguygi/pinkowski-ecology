/*
==========================================================
FIELD STATION
Materials

Observation Deck RC2
Phase 01
==========================================================
*/

export class Materials {

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

            whiteOak: {

                name: "White Oak",

                base: "#D7C3A4",

                shadow: "#B2926D",

                highlight: "#F4E7D5",

                accent: "#8B6B47",

                texture: "wood",

                roughness: 0.75

            },

            walnut: {

                name: "Walnut",

                base: "#6B4A34",

                shadow: "#4B3425",

                highlight: "#8A6650",

                accent: "#3A281D",

                texture: "wood",

                roughness: 0.82

            },

            brass: {

                name: "Brass",

                base: "#B79036",

                shadow: "#89671E",

                highlight: "#E6C96F",

                accent: "#6E5218",

                texture: "metal",

                roughness: 0.28

            },

            limestone: {

                name: "Limestone",

                base: "#D7D3C9",

                shadow: "#B8B2A7",

                highlight: "#F5F3EF",

                accent: "#9D968C",

                texture: "stone",

                roughness: 0.94

            },

            glass: {

                name: "Architectural Glass",

                base: "rgba(214,234,244,.30)",

                shadow: "rgba(180,205,218,.20)",

                highlight: "rgba(255,255,255,.75)",

                accent: "rgba(220,240,255,.50)",

                texture: "glass",

                roughness: 0.02

            },

            moss: {

                name: "Living Moss",

                base: "#5F8152",

                shadow: "#3F5937",

                highlight: "#8EAF7A",

                accent: "#6E9B5C",

                texture: "organic",

                roughness: 1.00

            },

            leather: {

                name: "Leather",

                base: "#8A5E3A",

                shadow: "#5D3F28",

                highlight: "#B07B4E",

                accent: "#714B2F",

                texture: "leather",

                roughness: 0.70

            },

            paper: {

                name: "Museum Paper",

                base: "#F4F0E5",

                shadow: "#D6CFBF",

                highlight: "#FFFFFF",

                accent: "#C2B8A3",

                texture: "paper",

                roughness: 0.96

            }

        };

        console.log("🪵 Materials Ready");

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

    register(name, material) {

        this.registry[name] = material;

    }

    /*
    ------------------------------------------------------
    List
    ------------------------------------------------------
    */

    list() {

        return Object.keys(this.registry);

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

        console.log("🪵 Materials Shutdown");

    }

}
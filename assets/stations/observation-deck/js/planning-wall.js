/*
==========================================================
FIELD STATION

Living Planning Wall

Controller

Building System 01

RC2
==========================================================
*/

import { ExpeditionCard }
    from "./expedition-card.js";
import { WeatherCard }
    from "./weather-card.js";
import { GISCard }
    from "./gis-card.js";
import { SampleCard }
    from "./sample-card.js";
import { MossPanel }
    from "./moss-panel.js";

export class PlanningWall {

    constructor(root) {

        this.root = root;

        this.cards = {};

        this.components = {};

        this.initialized = false;

    }

    /*
    ------------------------------------------------------
    Initialization
    ------------------------------------------------------
    */

    async initialize() {

        if (this.initialized) {

            return;

        }

        this.cacheElements();

        await this.initializeCards();

        this.initialized = true;

        console.log(
            "📋 Planning Wall Ready"
        );

    }

    /*
    ------------------------------------------------------
    Cache DOM
    ------------------------------------------------------
    */

    cacheElements() {

        this.cards = {

            expedition:

                this.root.querySelector(
                    "#expedition-card"
                ),

            weather:

                this.root.querySelector(
                    "#weather-card"
                ),

            gis:

                this.root.querySelector(
                    "#gis-card"
                ),

            samples:

                this.root.querySelector(
                    "#samples-card"
                ),

            moss:

                this.root.querySelector(
                    "#moss-card"
                )

        };

    }

    /*
    ------------------------------------------------------
    Initialize Components
    ------------------------------------------------------
    */

    async initializeCards() {

        this.components = {

            expedition:
                new ExpeditionCard(
                    this.cards.expedition
                ),

            weather:
                new WeatherCard(
                    this.cards.weather
                ),

            gis:
                new GISCard(
                    this.cards.gis
                ),

            samples:
                new SampleCard(
                    this.cards.samples
                ),

            moss:
                new MossPanel(
                    this.cards.moss
                )

        };

        /*
        ----------------------------------------------
        Initialize Production Components
        ----------------------------------------------
        */

        for (const component of Object.values(this.components)) {

            await component.initialize();

        }

    }

    /*
    ------------------------------------------------------
    Placeholder Renderer
    ------------------------------------------------------
    */

    renderPlaceholder(

        card,

        title,

        body

    ) {

        if (!card) {

            return;

        }

        card.innerHTML = `

            <div class="planning-card-content">

                <h3 class="planning-card-title">

                    ${title}

                </h3>

                <div class="planning-card-body">

                    ${body}

                </div>

            </div>

        `;

    }

    /*
    ------------------------------------------------------
    Runtime Updates
    ------------------------------------------------------
    */

    update() {

        for (const component of Object.values(this.components)) {

            if (typeof component.update === "function") {

                component.update();

            }

        }

    }

    /*
    ------------------------------------------------------
    Shutdown
    ------------------------------------------------------
    */

    destroy() {

        for (const component of Object.values(this.components)) {

            if (typeof component.destroy === "function") {

                component.destroy();

            }

        }

        this.components = {};

        this.cards = {};

        this.initialized = false;

        console.log(
            "📋 Planning Wall Shutdown"
        );

    }

}
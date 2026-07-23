/*
==========================================================
Observation Deck
==========================================================
*/

import { WeatherDisplay }
from "./weather-display.js";

export class ObservationDeck {

    constructor() {

        this.weatherLayer =
            document.getElementById(
                "weather-layer"
            );

        if(!this.weatherLayer) return;

        new WeatherDisplay(
            this.weatherLayer
        );

    }

}
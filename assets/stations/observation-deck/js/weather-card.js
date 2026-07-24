/*
==========================================================
FIELD STATION

Weather Card

Building System 01

RC2
==========================================================
*/

export class WeatherCard {

    constructor(root) {

        this.root = root;

        this.data = null;

    }

    /*
    ------------------------------------------------------
    Initialization
    ------------------------------------------------------
    */

    async initialize() {

        await this.load();

        this.render();

        console.log(
            "🌤️ Weather Card Ready"
        );

    }

    /*
    ------------------------------------------------------
    Load Data
    ------------------------------------------------------
    */

    async load() {

        const response = await fetch(

            "assets/data/weather.json"

        );

        this.data = await response.json();

    }

    /*
    ------------------------------------------------------
    Render
    ------------------------------------------------------
    */

    render() {

        const d = this.data;

        this.root.innerHTML = `

<div class="planning-card-content">

    <h3 class="planning-card-title">

        Environmental Conditions

    </h3>

    <div class="weather-grid">

        <div class="weather-item">

            <span class="label">

                Station

            </span>

            <p>

                ${d.station}

            </p>

        </div>

        <div class="weather-item">

            <span class="label">

                Temperature

            </span>

            <p>

                ${d.temperature}&deg;F

            </p>

        </div>

        <div class="weather-item">

            <span class="label">

                Conditions

            </span>

            <p>

                ${d.condition}

            </p>

        </div>

        <div class="weather-item">

            <span class="label">

                Humidity

            </span>

            <p>

                ${d.humidity}%

            </p>

        </div>

        <div class="weather-item">

            <span class="label">

                Wind

            </span>

            <p>

                ${d.wind}

            </p>

        </div>

        <div class="weather-item">

            <span class="label">

                Fire Weather

            </span>

            <p>

                ${d.fireWeather}

            </p>

        </div>

    </div>

    <div class="weather-footer">

        <div>

            <span class="label">

                Sunrise

            </span>

            <p>

                ${d.sunrise}

            </p>

        </div>

        <div>

            <span class="label">

                Sunset

            </span>

            <p>

                ${d.sunset}

            </p>

        </div>

        <div>

            <span class="label">

                Moon

            </span>

            <p>

                ${d.moonPhase}

            </p>

        </div>

    </div>

</div>

`;

    }

    /*
    ------------------------------------------------------
    Future Live Updates
    ------------------------------------------------------
    */

    update() {

    }

    /*
    ------------------------------------------------------
    Shutdown
    ------------------------------------------------------
    */

    destroy() {

    }

}
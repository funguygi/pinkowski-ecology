/*
==========================================================
Field Station
Weather Cloud Display
v2.1.0-alpha.1
==========================================================
*/

export class WeatherDisplay {

    constructor(container) {

        this.container = container;

        if (!container) return;

        this.render();

    }

    render() {

        const stations = [

            {
                id: "wright",
                name: "Wright's Field",
                location: "Alpine",
                temp: "--°",
                detail: "Connecting..."
            },

            {
                id: "milpa",
                name: "CSUSM Milpa",
                location: "San Marcos",
                temp: "--°",
                detail: "Connecting..."
            },

            {
                id: "jtree",
                name: "Joshua Tree",
                location: "Weekend",
                temp: "--°",
                detail: "Checking climbing..."
            }

        ];

        this.container.innerHTML = "";

        stations.forEach(station => {

            this.container.appendChild(

                this.createCloud(station)

            );

        });

    }

    createCloud(station) {

        const cloud = document.createElement("article");

        cloud.className = "weather-cloud";

        cloud.innerHTML = `

            <div class="cloud-body">

                <h3>${station.name}</h3>

                <p>${station.location}</p>

                <div class="temperature">

                    ${station.temp}

                </div>

                <small>

                    ${station.detail}

                </small>

            </div>

        `;

        return cloud;

    }

}
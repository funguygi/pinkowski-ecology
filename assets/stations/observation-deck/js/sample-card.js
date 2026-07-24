/*
==========================================================
FIELD STATION

Sample Card

Building System 01

RC2
==========================================================
*/

export class SampleCard {

    constructor(root) {

        this.root = root;

        this.data = null;

    }

    async initialize() {

        await this.load();

        this.render();

        console.log(
            "🧪 Sample Card Ready"
        );

    }

    async load() {

        const response = await fetch(
            "assets/data/samples.json"
        );

        this.data = await response.json();

    }

    render() {

        const samples = this.data.samples;

        this.root.innerHTML = `

<div class="planning-card-content">

    <h3 class="planning-card-title">

        Recent Samples

    </h3>

    <div class="sample-list">

        ${samples.map(sample => `

            <div class="sample-row">

                <div>

                    <strong>${sample.id}</strong>

                    <span>${sample.site}</span>

                </div>

                <div class="sample-status">

                    ${sample.status}

                </div>

            </div>

        `).join("")}

    </div>

</div>

`;

    }

    update() {}

    destroy() {}

}
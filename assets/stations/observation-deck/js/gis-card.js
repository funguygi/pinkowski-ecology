/*
==========================================================
FIELD STATION

GIS Card

Building System 01

RC2
==========================================================
*/

export class GISCard {

    constructor(root) {

        this.root = root;

        this.data = null;

    }

    async initialize() {

        await this.load();

        this.render();

        console.log(
            "🗺️ GIS Card Ready"
        );

    }

    async load() {

        const response = await fetch(
            "assets/data/gis.json"
        );

        this.data = await response.json();

    }

    render() {

        const d = this.data;

        this.root.innerHTML = `

<div class="planning-card-content">

<h3 class="planning-card-title">

Field Map

</h3>

<div class="gis-map">

<div class="plot-marker"></div>

</div>

<div class="expedition-section">

<span class="label">

Preserve

</span>

<p>

${d.title}

</p>

</div>

<div class="expedition-section">

<span class="label">

Active Plot

</span>

<p>

${d.activePlot}

</p>

</div>

<div class="expedition-grid">

<div>

<span class="label">

Sampling Sites

</span>

<p>

${d.samplingSites}

</p>

</div>

<div>

<span class="label">

Restoration Zones

</span>

<p>

${d.restorationZones}

</p>

</div>

</div>

</div>

`;

    }

    update() {}

    destroy() {}

}
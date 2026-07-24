/*
==========================================================
FIELD STATION

Expedition Card

Data Driven

RC2
==========================================================
*/

export class ExpeditionCard {

    constructor(root) {

        this.root = root;

        this.data = null;

    }

    async initialize() {

        await this.load();

        this.render();

        console.log(
            "🧭 Expedition Card Ready"
        );

    }

    /*
    ------------------------------------------------------
    Load JSON
    ------------------------------------------------------
    */

    async load() {

        const response = await fetch(

            "assets/data/expedition.json"

        );

        this.data =

            await response.json();

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

Today's Expedition

</h3>

<div class="expedition-section">

<span class="label">

Location

</span>

<p>

${d.location}

</p>

</div>

<div class="expedition-section">

<span class="label">

Expedition

</span>

<p>

${d.title}

</p>

</div>

<div class="expedition-section">

<span class="label">

Objective

</span>

<p>

${d.objective}

</p>

</div>

<div class="expedition-grid">

<div>

<span class="label">

Status

</span>

<p>

${d.status}

</p>

</div>

<div>

<span class="label">

Priority

</span>

<p>

${d.priority}

</p>

</div>

</div>

<div class="expedition-section">

<span class="label">

Lead Investigator

</span>

<p>

${d.lead}

</p>

</div>

</div>

`;

    }

    update() {}

    destroy() {}

}
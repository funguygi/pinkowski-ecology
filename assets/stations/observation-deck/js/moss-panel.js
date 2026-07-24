/*
==========================================================
FIELD STATION

Living Moss Panel

Building System 01

RC2
==========================================================
*/

export class MossPanel {

    constructor(root) {

        this.root = root;

    }

    /*
    ------------------------------------------------------
    Initialization
    ------------------------------------------------------
    */

    async initialize() {

        this.render();

        console.log(
            "🌿 Moss Panel Ready"
        );

    }

    /*
    ------------------------------------------------------
    Render
    ------------------------------------------------------
    */

    render() {

        this.root.innerHTML = `

<div class="planning-card-content">

    <h3 class="planning-card-title">

        Living Wall

    </h3>

    <div class="moss-wall">

        <div class="moss-layer layer-1"></div>

        <div class="moss-layer layer-2"></div>

        <div class="moss-layer layer-3"></div>

    </div>

    <div class="moss-caption">

        Interior humidity is maintaining
        healthy bryophyte growth.

    </div>

</div>

`;

    }

    update() {

    }

    destroy() {

    }

}
/*
==========================================================
Field Station
Debug Console
==========================================================
*/

export function runDiagnostics() {

    console.group("🌿 Field Station Diagnostics");

    /*
    ------------------------------------------------------
    Required DOM Elements
    ------------------------------------------------------
    */

    const required = [

        "#arrival",
        "#svg-root",
        "#ambient-light",
        "#scroll-progress"

    ];

    required.forEach(selector => {

        const found = document.querySelector(selector);

        console.log(

            found
                ? `✅ ${selector}`
                : `❌ Missing ${selector}`

        );

    });

    /*
    ------------------------------------------------------
    Arrival Layers
    ------------------------------------------------------
    */

    const layers = [

        ".sky-layer",
        ".mountain-layer",
        ".grass-layer"

    ];

    layers.forEach(selector => {

        const found = document.querySelector(selector);

        console.log(

            found
                ? `✅ ${selector}`
                : `❌ Missing ${selector}`

        );

    });

    /*
    ------------------------------------------------------
    SVG
    ------------------------------------------------------
    */

    const svg = document.querySelector("#svg-root svg");

    console.log(

        svg
            ? "✅ SVG Loaded"
            : "❌ SVG Missing"

    );

    /*
    ------------------------------------------------------
    Prairie Layer
    ------------------------------------------------------
    */

    const prairie = document.querySelector("#svg-root #prairie");

    console.log(

        prairie
            ? "✅ Prairie Layer Found"
            : "❌ Prairie Layer Missing"

    );

    if (prairie) {

        console.log(

            `🌾 Grass Objects: ${prairie.children.length}`

        );

    }

    /*
    ------------------------------------------------------
    Scene Count
    ------------------------------------------------------
    */

    const scenes =
        document.querySelectorAll("[data-scene]");

    console.log(

        `🎬 Scenes: ${scenes.length}`

    );

    /*
    ------------------------------------------------------
    Theme
    ------------------------------------------------------
    */

    console.log(

        "🎨 Theme:",

        document.documentElement.dataset.theme

    );

    /*
    ------------------------------------------------------
    CSS Variables
    ------------------------------------------------------
    */

    console.log(

        "--chapter-index:",

        getComputedStyle(document.documentElement)
            .getPropertyValue("--chapter-index")

    );

    console.groupEnd();

}
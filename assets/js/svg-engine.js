/*
==========================================================
Field Station
SVG Engine
==========================================================
*/

export class SVGEngine {

    constructor(root = document.getElementById("svg-root")) {

        this.root = root;

    }

    clear() {

        if (!this.root) return;

        this.root.replaceChildren();

    }

    async load(file) {

        console.log("Loading:", file);

        const response = await fetch(file);

        console.log("Response:", response.status);

        if (!response.ok) {

            throw new Error(
                `Could not load ${file} (${response.status})`
            );

        }

        const text = await response.text();

        console.log("SVG Length:", text.length);

        this.root.innerHTML = text;

        console.log("SVG inserted.");

        return this.root.querySelector("svg");

    }

    get(id) {

        if (!this.root) return null;

        return this.root.querySelector(`#${id}`);

    }

}
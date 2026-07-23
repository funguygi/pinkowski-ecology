/*
==========================================================
Field Station
Landscape Renderer
v2.1.0-alpha.1
==========================================================
*/

export class LandscapeRenderer {

    constructor(root = document.getElementById("window-landscape")) {

        this.root = root;

        this.svg = null;

    }

    async initialize() {

        if (!this.root) return;

        const response =
            await fetch("assets/svg/arrival.svg");

        if (!response.ok) {

            throw new Error(
                "Unable to load landscape."
            );

        }

        this.root.innerHTML =
            await response.text();

        this.svg =
            this.root.querySelector("svg");

        this.cacheLayers();

    }

    cacheLayers() {

        if (!this.svg) return;

        this.layers = {

            sky:
                this.svg.querySelector("#sky"),

            haze:
                this.svg.querySelector("#haze"),

            mountainsBack:
                this.svg.querySelector("#mountains-back"),

            mountainsMid:
                this.svg.querySelector("#mountains-mid"),

            mountainsFront:
                this.svg.querySelector("#mountains-front"),

            prairie:
                this.svg.querySelector("#prairie"),

            soil:
                this.svg.querySelector("#soil"),

            roots:
                this.svg.querySelector("#roots"),

            hyphae:
                this.svg.querySelector("#hyphae")

        };

    }

    render(position) {

        if (!this.layers) return;

        const p =
            Math.max(0, Math.min(1, position));

        if (this.layers.sky) {

            this.layers.sky.style.transform =
                `translateY(${p * 8}px)`;

        }

        if (this.layers.mountainsBack) {

            this.layers.mountainsBack.style.transform =
                `translateY(${p * 18}px)`;

        }

        if (this.layers.mountainsMid) {

            this.layers.mountainsMid.style.transform =
                `translateY(${p * 30}px)`;

        }

        if (this.layers.mountainsFront) {

            this.layers.mountainsFront.style.transform =
                `translateY(${p * 45}px)`;

        }

    }

}
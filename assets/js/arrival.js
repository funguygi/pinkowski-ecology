/*
==========================================================
Field Station
Arrival Room
v2.0.0-alpha.2
==========================================================
*/

import { PrairieGenerator } from "./prairie-generator.js";

import { RootGenerator } from "./root-generator.js";

export class Arrival {

    constructor() {

        console.log("🌿 Arrival Controller");

        this.scene = document.querySelector("#arrival");

        if (!this.scene) {

            console.error("Arrival scene not found.");

            return;

        }

        this.sky = this.scene.querySelector(".sky-layer");
        this.mountains = this.scene.querySelector(".mountain-layer");
        this.grass = this.scene.querySelector(".grass-layer");

        this.label = this.scene.querySelector(".museum-label");
        this.observe = this.scene.querySelector(".arrival-observation");
        this.title = this.scene.querySelector("h1");
        this.intro = this.scene.querySelector(".arrival-introduction");

        this.ambient = document.getElementById("ambient-light");

        this.motionReduced =
            window.matchMedia("(prefers-reduced-motion: reduce)");

        this.progress = 0;

        this.wind = 0;

        this.last = performance.now();

        this.initialize();

    }

    async initialize() {

        console.log("Initializing Arrival...");

        this.prepareScene();

        /*
        ------------------------------------------------------
        Wait until SVG exists
        ------------------------------------------------------
        */

        await this.waitForPrairie();

        requestAnimationFrame(() => {

            this.scene.classList.add("arrival-ready");

        });

        window.addEventListener(

            "scroll",

            () => this.updateScroll(),

            { passive: true }

        );

        requestAnimationFrame(

            (t) => this.animate(t)

        );

    }

    async waitForPrairie() {

        let prairie = null;
        let roots = null;

        while (!prairie || !roots) {

            prairie =
                document.querySelector(
                    "#svg-root #prairie"
                );

            roots =
                document.querySelector(
                    "#svg-root #roots"
                );

            if (!prairie || !roots) {

                await new Promise(resolve =>
                    requestAnimationFrame(resolve)
                );

            }

        }

        console.log("✅ Ecosystem ready.");

        const prairieGenerator =
            new PrairieGenerator(
                prairie
            );

        prairieGenerator.generate(350);

        const rootGenerator =
            new RootGenerator(
                roots
            );

        rootGenerator.generate(14);

    }

    prepareScene() {

        [
            this.label,
            this.observe,
            this.title,
            this.intro
        ].forEach(el => {

            if (el) {

                el.style.opacity = 0;

            }

        });

    }

    updateScroll() {

        const rect =
            this.scene.getBoundingClientRect();

        this.progress = Math.max(

            0,

            Math.min(

                1,

                -rect.top / window.innerHeight

            )

        );

    }

    animate(now) {

        const dt =
            (now - this.last) / 1000;

        this.last = now;

        this.wind += dt * 0.35;

        this.animateLandscape();

        this.animateText();

        this.animateAmbient();

        requestAnimationFrame(

            t => this.animate(t)

        );

    }

    animateLandscape() {

        if (this.motionReduced.matches)
            return;

        const breeze =
            Math.sin(this.wind);

        if (this.sky) {

            this.sky.style.transform =
                `translateY(${this.progress * 8}px)`;

        }

        if (this.mountains) {

            this.mountains.style.transform =
                `translateY(${this.progress * 18}px)`;

        }

        if (this.grass) {

            this.grass.style.transform =
                `translateY(${this.progress * 34}px)
                 translateX(${breeze * 3}px)`;

        }

    }

    animateText() {

        const fade = (a, b) =>

            Math.max(

                0,

                Math.min(

                    1,

                    (this.progress - a) /
                    (b - a)

                )

            );

        this.label.style.opacity =
            fade(.00, .10);

        this.observe.style.opacity =
            fade(.08, .22);

        this.title.style.opacity =
            fade(.18, .40);

        this.intro.style.opacity =
            fade(.34, .60);

    }

    animateAmbient() {

        if (!this.ambient)
            return;

        this.ambient.style.opacity =
            1 - (this.progress * .55);

    }

}
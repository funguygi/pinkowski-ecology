/*
==========================================================
Field Station
Prairie Generator
==========================================================
*/

const SVG_NS = "http://www.w3.org/2000/svg";

export class PrairieGenerator {

    constructor(group) {

        this.group = group;

    }

    generate(count = 250) {

        if (!this.group) {

            console.error("Prairie group not found.");

            return;

        }

        console.log("Generating prairie...");

        this.group.replaceChildren();

        for (let i = 0; i < count; i++) {

            this.group.appendChild(
                this.createGrass()
            );

        }

        console.log(
            "Grass created:",
            this.group.children.length
        );

    }

    createGrass() {

        const x = Math.random() * 1600;

        const baseY = 720 + Math.random() * 120;

        const height = 18 + Math.random() * 90;

        const lean = (Math.random() - 0.5) * 22;

        const width = 1 + Math.random() * 1.8;

        const hue = 92 + Math.random() * 18;

        const light = 28 + Math.random() * 18;

        const path = document.createElementNS(
            SVG_NS,
            "path"
        );

        path.setAttribute(
            "d",

`M ${x} ${baseY}
 Q ${x + lean}
   ${baseY - height * .5}
   ${x}
   ${baseY - height}`

        );

        path.setAttribute("fill","none");

        path.setAttribute(
            "stroke",
            `hsl(${hue},25%,${light}%)`
        );

        path.setAttribute(
            "stroke-width",
            width
        );

        path.setAttribute(
            "stroke-linecap",
            "round"
        );

        return path;

    }

}
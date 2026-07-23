/*
==========================================================
Field Station
Root Generator
v2.0.0-alpha.1
==========================================================
*/

const SVG_NS = "http://www.w3.org/2000/svg";

export class RootGenerator {

    constructor(group) {

        this.group = group;

    }

    generate(count = 12) {

        if (!this.group) return;

        this.group.replaceChildren();

        for (let i = 0; i < count; i++) {

            const x =
                80 + (i * 120) + (Math.random() * 40);

            this.branch(
                x,
                760,
                0,
                140,
                0
            );

        }

    }

    branch(x, y, angle, length, depth) {

        if (depth > 6) return;

        const radians = angle * Math.PI / 180;

        const x2 =
            x + Math.sin(radians) * length;

        const y2 =
            y + Math.cos(radians) * length;

        const path =
            document.createElementNS(
                SVG_NS,
                "path"
            );

        path.setAttribute(
            "d",
            `M ${x} ${y} L ${x2} ${y2}`
        );

        path.setAttribute(
            "fill",
            "none"
        );

        path.setAttribute(
            "stroke",
            "#8D7657"
        );

        path.setAttribute(
            "stroke-linecap",
            "round"
        );

        path.setAttribute(
            "stroke-width",
            Math.max(
                0.5,
                4 - depth * .55
            )
        );

        this.group.appendChild(path);

        const next =
            length * (0.62 + Math.random() * .12);

        this.branch(
            x2,
            y2,
            angle - (10 + Math.random() * 18),
            next,
            depth + 1
        );

        this.branch(
            x2,
            y2,
            angle + (10 + Math.random() * 18),
            next,
            depth + 1
        );

    }

}
import { SceneManager } from "./scene-manager.js";
import { ScrollEngine } from "./scroll-engine.js";
import { AnimationEngine } from "./animation-engine.js";
import { ThemeEngine } from "./theme-engine.js";
import { ChapterManager } from "./chapter-manager.js";
import { ContentEngine } from "./content-engine.js";
import { SVGEngine } from "./svg-engine.js";
import { Arrival } from "./arrival.js";
import { runDiagnostics } from "./debug.js";
import { ObservationDeck }
from "../stations/observation-deck/observation-deck.js";

const sections = [
    ...document.querySelectorAll("[data-scene]")
];

const sceneManager = new SceneManager(sections);

const animationEngine = new AnimationEngine();

const themeEngine = new ThemeEngine();

const svgEngine = new SVGEngine();

const contentEngine = new ContentEngine();

const chapters = await contentEngine.load(
    "assets/data/chapters.json"
);

const chapterManager = new ChapterManager(
    chapters
);

/*
---------------------------------------------------------
Room Controllers
---------------------------------------------------------
*/

console.log("Creating Arrival controller...");

const arrival = new Arrival();

const observationDeck =
    new ObservationDeck();

console.log(arrival);

try {

    console.log("Loading SVG...");

    await svgEngine.load(
        "assets/svg/arrival.svg"
    );

    console.log("SVG loaded successfully.");

}
catch (error) {

    console.error(error);

}

/*
---------------------------------------------------------
Scene Changes
---------------------------------------------------------
*/

document.addEventListener(
    "scenechange",
    ({ detail }) => {

        const chapter = chapterManager.current(
            detail.index
        );

        if (!chapter) return;

        themeEngine.apply(
            chapter.theme
        );

        document.documentElement.style.setProperty(
            "--chapter-index",
            detail.index
        );

        const progress =
            ((detail.index + 1) / chapters.length) * 100;

        const bar =
            document.getElementById(
                "scroll-progress"
            );

        if (bar) {

            bar.style.width =
                progress + "%";

        }

        // svgEngine.clear();

    }
);

/*
---------------------------------------------------------
Runtime
---------------------------------------------------------
*/

const scrollEngine =
    new ScrollEngine(
        sceneManager,
        animationEngine
    );

scrollEngine.start();

sceneManager.activate(0);

runDiagnostics();
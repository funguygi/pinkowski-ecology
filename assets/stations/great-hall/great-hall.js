/*
==========================================================

FIELD STATION

Great Hall

Release 0.2

==========================================================
*/

export class GreatHall {

    constructor(root) {

        this.root = root;

    }

    initialize() {

        this.render();

        console.log("🏛 Great Hall Ready");

    }

    render() {

        this.root.innerHTML = `
            <main class="great-hall">

                <header id="great-dome"></header>

                <section id="great-room"></section>

                <footer id="great-exit"></footer>

            </main>
        `;

    }

    destroy() {

        this.root.innerHTML = "";

    }

}
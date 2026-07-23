/*
==========================================================
Field Station
Focus Manager
==========================================================
*/

export class Focus {

    constructor() {

        this.target = "window";

        this.listeners = [];

    }

    set(target) {

        if (target === this.target) return;

        this.target = target;

        this.listeners.forEach(listener => {

            listener(target);

        });

    }

    onChange(callback) {

        this.listeners.push(callback);

    }

}
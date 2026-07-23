/*
==========================================================
Field Station
Camera
v2.1.0-alpha.1
==========================================================
*/

export class Camera {

    constructor() {

        this.position = 0;

        this.target = 0;

        this.velocity = 0;

        this.damping = 0.08;

        this.listeners = [];

        this.animate();

    }

    set(target) {

        this.target = target;

    }

    onMove(callback) {

        this.listeners.push(callback);

    }

    animate() {

        const delta =
            this.target - this.position;

        this.velocity += delta * this.damping;

        this.velocity *= 0.82;

        this.position += this.velocity;

        this.listeners.forEach(listener => {

            listener(this.position);

        });

        requestAnimationFrame(
            () => this.animate()
        );

    }

}
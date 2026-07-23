/*
==========================================================
Field Station
World
==========================================================
*/

export class World {

    constructor(camera) {

        this.camera = camera;

        this.systems = [];

        camera.onMove(

            position => {

                this.render(position);

            }

        );

    }

    add(system) {

        this.systems.push(system);

    }

    render(position) {

        this.systems.forEach(system => {

            if(system.render){

                system.render(position);

            }

        });

    }

}
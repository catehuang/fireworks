/**
 * Explosion particles
 */
class Particle
{
    constructor()
    {
        /*
         * Location:
        */
       this.x = 0;
       this.y = 0;

        /*
         *  Path or movement of fireworks: 
        */
        this.speed = Math.random() * 3;
        this.angle = Math.random() * Math.PI * 2;

        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = -Math.sin(this.angle) * this.speed;

        // const colors = [
        //     'red',
        //     'blue',
        //     'yellow',
        //     'green'
        // ]
        /*
         *  Create element to show particles
         */
        this.element = document.createElement("div");
        this.element.className = "particle";
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        this.element.style.backgroundColor = "orange";
        // this.element.style.backgroundColor = colors[parseInt(Math.random() * colors.length)];
        document.body.appendChild(this.element);

        /**
         *  Clear elements
         */
        setTimeout(() => {
            this.element.remove();
            particles.splice(particles.indexOf(this), 1);
        }, 800);
    }

    setPosition(x, y)
    {
        this.x = x;
        this.y = y;
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }

    update()
    {
        this.setPosition(this.x + this.vx, this.y + this.vy);
    }
}

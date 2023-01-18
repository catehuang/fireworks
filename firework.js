/**
 *  Create fireworks
 */
class Firework
{
    constructor()
    {
        /*
         * Location:
         * x range between 0.25 - 0.75 view; y is 0.20 hight of view height
        */
       this.x = window.innerWidth / 4 + window.innerWidth * Math.random() * 0.5;
       this.y = window.innerHeight * 4 / 5;

        /*
         *  Path or movement of fireworks: 
         *  Angel would be greater than 0 and less than PI (upper view);
         *  For better user experience, using the angle between PI/4 and PI-PI/4;
         *  However, in html, the y points down (y-axis is upside down)
        */
        this.speed = 5;
        this.angle = (Math.PI / 4 + Math.random() * Math.PI / 2);

        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = -Math.sin(this.angle) * this.speed;

        /*
         *  Create element to show fireworks
         */
        this.element = document.createElement("div");
        this.element.className = "firework";
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        document.body.appendChild(this.element);

        /**
         *  Clear elements
         */
        setTimeout(() => {
            this.element.remove();
            fireworks.splice(fireworks.indexOf(this), 1);
            this.explode();
        }, 3600);
    }

    /**
     *  Update the position of the firework
     */
    update()
    {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.025;
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }

    /**
     * Firework explosion
     */
    explode()
    {
        for (let i = 0; i < 50; i++)
        {
            const particle = new Particle();
            particle.setPosition(this.x, this.y);
            particles.push(particle);            
        }
    }
}
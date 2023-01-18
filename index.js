const fireworks = [];
const particles = [];

/*
 * Create 5 fireworks
 */
setInterval(() => {
    for (let i = 0; i < 5; i++)
    {
        const firework = new Firework();
        fireworks.push(firework);        
    }
}, 4000);


/*
 *  Update the view
 */
setInterval(() => {
    fireworks.forEach((firework) => {
        firework.update();
    })
    particles.forEach((particle) => {
        particle.update();
    })
}, 15);

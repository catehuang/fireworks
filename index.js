const fireworks = [];
const particles = [];

/*
 * Create fireworks at a time, need to take computer performance into account
 */
setInterval(() => {
    for (let i = 0; i < 10; i++)
    {
        const firework = new Firework();
        fireworks.push(firework);        
    }
}, 3600);


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

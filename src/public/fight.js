
export default async function fight(fighter, improvedFighter, ...points) {
    console.log(`Ladies and gentlemen! Today we will watch a fight between two professional fighters. ` 
    + `In the right corner is ${fighter.name} and on the opposite side is his opponent ${improvedFighter.name}. ` 
    + `Are you ready? Fight!`);

    for (let i = 0; i < points.length; i++) {
        console.log(`${i+1} round!`);

        fighter.hit(improvedFighter, points[i]);

        if (improvedFighter.health <= 0) {
            console.log(`${improvedFighter.name} has been knockouted!`);
            await improvedFighter.knockout();
            break;
        }

        improvedFighter.doubleHit(fighter, points[i]);

        if (fighter.health <= 0) {
            console.log(`${fighter.name} has been knockouted!`);
            await fighter.knockout();
            break;
        }
    }
}
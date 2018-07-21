
export class Fighter {
    constructor(name, power, health = 100) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health -= damage;
        console.log(`\t${this.name}'s health: ${this.health}`);
    }

    hit(enemy, point) {
        let damage = this.power * point;
        console.log(`\t${this.name} hits ${enemy.name} with ${damage} damage!`);
        enemy.setDamage(damage);       
    }

    knockout() {
        return new Promise((resolve, reject) => {
            console.log('time is over');
            setTimeout(() => {
                resolve();
            }, 500);
        })
    }
}
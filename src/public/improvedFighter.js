import Fighter from "./fighter";

export default class ImprovedFighter extends Fighter {
    doubleHit(enemy, point) {
        super.hit(enemy, point * 2);
    }
}
import { Fighter } from "./fighter";
import { ImprovedFighter } from "./improvedFighter";
import { fight } from "./fight";

var firstFighter = new Fighter('Vladimir', 5, 300);
var secondFighter = new ImprovedFighter('Mike', 7, 120);

fight(firstFighter, secondFighter, 2, 4, 2, 2, 3, 5, 7, 10, 12, 11, 14);
import { multiplica, suma } from "./Modulos/controller.js";
import chalk from "chalk";
const mult = multiplica(1, 2)

const sum = suma(4,5)

console.log(sum)
console.log(chalk.green(mult))
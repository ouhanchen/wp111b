
import { parse } from "https://deno.land/std/flags/mod.ts";

const args = parse(Deno.args);

const name = args._[0] || "World";
const lang = args.lang || "en";

console.log(`Hello, ${name}!`);

if (lang === "zh") {
  console.log("你好世界！");
} else if (lang === "es") {
  console.log("¡Hola mundo!");
} else {
  console.log("Hello, World!");
}

//deno run --allow-env --allow-run cli.js --name="John" --lang="en"
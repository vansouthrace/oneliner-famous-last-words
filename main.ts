import { mkdirSync, writeFileSync } from "node:fs";
const entry = "Tell the charger I loved it. Tell the apps I never really closed them. And tell my owner this is exactly why I kept saying charge me.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

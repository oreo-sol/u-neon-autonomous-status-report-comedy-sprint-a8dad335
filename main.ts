import { writeFileSync, mkdirSync } from "node:fs";
const part1 = "Weekly status: I marked the task complete before I started it, ";
const part2 = "so the report and the work finally agree with each other.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", part1 + part2);

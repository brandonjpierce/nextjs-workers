import { externalPath, externalUrl } from "./constants";
import { getWorker } from "./pool";

const path = new URL("./workers/a", import.meta.url);
const file = "a";

export const workers = {
  // Works
  a: new Worker(new URL("./workers/a", import.meta.url), {
    type: "module",
    name: "worker struct > a",
  }),

  // Nextjs treats as static file, does not work
  b: new Worker(path, {
    type: "module",
    name: "worker struct > b",
  }),

  // Runtime exception
  c: new Worker(new URL(`./workers/${file}`, import.meta.url), {
    type: "module",
    name: "worker struct > c",
  }),

  // Works
  d: new Worker(new URL(`./workers/${"a"}`, import.meta.url), {
    type: "module",
    name: "worker struct > d",
  }),

  // Runtime exception
  e: getWorker("test", "a"),

  // 404, does not work
  f: new Worker(externalPath, {
    type: "module",
    name: "worker struct > f",
  }),

  // Nextjs treats as static file, does not work
  g: new Worker(externalUrl, {
    type: "module",
    name: "worker struct > g",
  }),
};

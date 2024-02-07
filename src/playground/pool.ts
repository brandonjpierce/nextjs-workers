const pool = new Map();

export function getWorker(id: any, workerPath: any) {
  if (!pool.get(id)) {
    pool.set(id, {
      worker: new Worker(new URL(`./workers/${workerPath}`, import.meta.url), {
        type: "module",
        name: `pool > ${id}`,
      }),
    });
  }

  return pool.get(id);
}

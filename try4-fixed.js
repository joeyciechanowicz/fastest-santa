#!./run

const buffer = Buffer.alloc(16384, "🎅");

function run() {
  process.stdout.write(buffer);

  setImmediate(run);
}

run();

#!./run

const buffer = Buffer.alloc(16384, "🎅");

while (true) {
  process.stdout.write(buffer);
}

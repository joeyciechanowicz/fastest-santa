// https://unix.stackexchange.com/questions/11946/how-big-is-the-pipe-buffer

const buffer = Buffer.alloc(16384, "🎅");

while (true) {
  process.stdout.write(buffer);
}

// node try4.js | pv > /dev/null

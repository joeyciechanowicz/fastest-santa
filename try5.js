const fs = require("fs");

const buffer = Buffer.alloc(16384, "🎅");
const res = buffer.toString();
while (true) {
  process.stdout.write(res);
}

// node try5.js | pv > /dev/null

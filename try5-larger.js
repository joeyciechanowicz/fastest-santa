const fs = require("fs");

const buffer = Buffer.alloc(65336, "🎅");
const res = buffer.toString();
while (true) {
  process.stdout.write(res);
}

// node try5-larger.js | pv > /dev/null

const fs = require("fs");

// 16384 is default pipe buffer size
// large buffer is used
const buffer = Buffer.alloc(65536, "🎅");

function write() {
  fs.write(process.stdout.fd, buffer, write);
}

fs.write(process.stdout.fd, buffer, write);

// node try7-larger.js | pv > /dev/null

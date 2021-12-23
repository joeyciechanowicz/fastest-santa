#!./run

const fs = require("fs");

// large buffer is used
const buffer = Buffer.alloc(65536, "🎅");

function write() {
  fs.write(process.stdout.fd, buffer, write);
}

fs.write(process.stdout.fd, buffer, write);

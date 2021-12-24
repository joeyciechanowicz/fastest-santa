#!./run

const fs = require("fs");

const buffer = Buffer.alloc(16384, "🎅");

function write() {
  fs.write(process.stdout.fd, buffer, write);
}

write();

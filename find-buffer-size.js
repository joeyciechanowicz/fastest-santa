const { Readable, Writable, Duplex } = require("stream");

class SantaStream extends Duplex {
  _write(chunk, encoding, cb) {
    console.log("Received", chunk.length);
    cb();
  }

  _read(size) {
    console.log("Size", size);
    this.push("");
  }
}

const santa = new SantaStream();
// santa.pipe(process.stdout);

process.stdin.pipe(santa).pipe(process.stdout);

// node try6.js | pv > /dev/null

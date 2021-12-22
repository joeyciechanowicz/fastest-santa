const { Readable } = require("stream");

const buffer = Buffer.alloc(16384, "🎅");

class SantaStream extends Readable {
  _read(size) {
    this.push(buffer);
  }
}

const santa = new SantaStream();
santa.pipe(process.stdout);

// node try6.js | pv > /dev/null

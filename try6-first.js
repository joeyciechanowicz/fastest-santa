#!./run

const { Readable } = require("stream");

class SantaStream extends Readable {
  constructor() {
    super();

    this._buffers = new Map();
  }

  _read(size) {
    if (!this._buffers.has(size)) {
      this._buffers.set(size, Buffer.alloc(size, "🎅"));
    }
    this.push(this._buffers.get(size));
  }
}

const santa = new SantaStream();
santa.pipe(process.stdout);

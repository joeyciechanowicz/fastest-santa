const { Duplex } = require("stream");

// https://unix.stackexchange.com/questions/11946/how-big-is-the-pipe-buffer

class PrintStream extends Duplex {
  _write(chunk, encoding, cb) {
    console.log("Received", chunk.length);
    cb();
  }

  _read(size) {
    console.log("Size", size);
    this.push("");
  }
}

const print = new PrintStream();

process.stdin.pipe(print).pipe(process.stdout);

const stream = require('node:stream');
const crypto = require('node:crypto');

const { join } = require('node:path');
const { createWriteStream } = require('node:fs');

const DEFAULTS = {
  name: 'rnd.file',
  size: 1024, 
  path: '/tmp',
  chunk: 1024,
};

function rndFile(opts) {
  return new Promise((resolve, reject) => {
    const { size, path, name, chunk } = { ...DEFAULTS, ...opts };

    const filePath = join(path, name);
    const result = { path, name, size };
    const fileStream = createWriteStream(filePath);
    fileStream.on('finish', () => resolve(result));
    fileStream.on('error', reject);

    let rest = size;
    while (rest > 0) {
      const chunkSize = Math.min(rest, chunk);
      fileStream.write(crypto.randomBytes(chunkSize));
      rest -= chunkSize;
    }
    fileStream.end();
  });
};

module.exports = rndFile;

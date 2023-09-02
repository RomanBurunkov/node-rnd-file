# node-rnd-file
Generation of a random files with Node.JS.

This module uses fs write streams, so in addition to file's name and path,
you can specify each data chunk size, which will be passed into a stream.
Default chunk size: 1 KB.

## Installation

`npm i rnd-file`

## Available options

Option name | Description | Default
--- | --- | ---
fileName | File name as a String| 'random.file'
filePath | Path to a file as a String| os.tmpdir()
fileSize | File size in bytes as a Number | 1024
chunkSize | Chunk size in bytes as a Number | 1024


## Usage Example:
```javascript
const rndFile = require('rnd-file');

// Generates random 4KB file /tmp/myfile.
async function generateRandomFile() {
  const file = await rndFile({
    filePath: '/tmp',
    fileName: 'myfile',
    fileSize: 4096,
    chunkSize: 1024,
  });

  console.log('Generated file:', file);
}

generateRandomFile();

```

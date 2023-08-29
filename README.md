# node-rnd-file
Generation of a random files with Node.JS.

## Installation

`npm i rnd-file`

## Usage Example:
```javascript
const rndFile = require('rnd-file');

async function generateRandomFile() {
  const file = await rndFile({
    path: '/tmp',
    name: 'myfile',
    size: '5mb',
  });

  console.log('Generated file:', file);
}

generateRandomFile();

```

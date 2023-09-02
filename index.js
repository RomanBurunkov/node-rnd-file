const { randomFile } = require('./lib/rnd.file');

randomFile({ filePath: 'C:\\randomfiles' })
  .then((file) => console.log(file));

module.exports = randomFile;

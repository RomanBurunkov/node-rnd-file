const { tmpdir } = require('node:os');
const DEFAULTS = require('../lib/defaults');

describe('randomFile defaults settings', () => {
  test('should be an object', () => {
    expect(typeof DEFAULTS).toBe('object');
  });

  test('should be frozen', () => {
    expect(Object.isFrozen(DEFAULTS)).toBe(true);
  });

  test('should have default fileName', () => {
    expect(DEFAULTS.fileName).toBe('random.file');
  });

  test('should have default filePath', () => {
    expect(DEFAULTS.filePath).toBe(tmpdir());
  });

  test('should have default fileSize', () => {
    expect(DEFAULTS.fileSize).toBe(1024);
  });

  test('should have default chunkSize', () => {
    expect(DEFAULTS.chunkSize).toBe(1024);
  });
});

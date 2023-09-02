const { makeDir, generate, randomFile } = require('../lib/rnd.file');

describe('randomFile', () => {
  test('should be a function', () => {
    expect(typeof randomFile).toBe('function');
  });
});

describe('generate', () => {
  test('should be a function', () => {
    expect(typeof generate).toBe('function');
  });
});

describe('makeDir', () => {
  test('should be a function', () => {
    expect(typeof makeDir).toBe('function');
  });
});

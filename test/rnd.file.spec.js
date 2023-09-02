const { join } = require('node:path');
const { rmdir, stat } = require('node:fs/promises');
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

  test('should generate a file', async () => {
    const path = join(__dirname, 'tmp', 'random.file');
    const size = 2000;
    const chunk = 1024;
    await generate(path, size, chunk);
    const stats = await stat(path);
    expect(stats.size).toBe(size);
  });
});

describe('makeDir', () => {
  test('should be a function', () => {
    expect(typeof makeDir).toBe('function');
  });

  test('should create a directory', async () => {
    const path = join(__dirname, 'tmp', 'test');
    await rmdir(path, { recursive: true });
    const created = await makeDir(path);
    expect(created).toBe(true);
  });

  test('should return false if directory already exist ', async () => {
    const path = join(__dirname, 'tmp', 'test');
    const created = await makeDir(path);
    expect(created).toBe(false);
  });
});

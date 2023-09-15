module.exports = {
  setupFiles: [],
  verbose: true,
  transform: {
      '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
      "/node_modules/"
  ],
  testPathIgnorePatterns: [
      "/node_modules/"
  ],
  watchman: true,
};
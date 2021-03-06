module.exports = {
  setupFilesAfterEnv: ["<rootDir>/enzymeConfig.js"],
  setupFiles: ["<rootDir>/enzymeConfig.js"],
  snapshotSerializers: ["jest-emotion/serializer"],
  moduleNameMapper: {
    "^.+\\.svg$": "<rootDir>/src/__mocks__/svgMock.js",
  },
  moduleFileExtensions: ["js", "jsx", "json", "tsx", "ts"],
  testPathIgnorePatterns: ["/node_modules/", "/lib/"],
}

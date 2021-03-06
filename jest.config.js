module.export = {
    roots: ["<rootDir>/src"],
    moduleDirectories: ['node_modules', 'utils'],
    moduleFileExtensions: ["ts", "tsx", "js"],
    transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
    setupFilesAfterEnv: [
        "@testing-library/react/cleanup-after-each",
        "@testing-library/jest-dom/extend-expect",
        "<rootDir>/src/setupTests.js"
    ],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    collectCoverage: false,
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
      },
}
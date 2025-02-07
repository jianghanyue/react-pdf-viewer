module.exports = {
    preset: 'jest-puppeteer',
    // Uncomment the `testMatch` option when we want to run a specific test case
    testMatch: ['<rootDir>/packages/highlight/__tests__/triggerNone.test.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    verbose: true,
};

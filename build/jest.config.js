
module.exports = {
    transform: {
        '.(ts|tsx)': 'ts-jest'
    },
    testEnvironment: 'jsdom',
    testRegex: '/__tests__/.*\\.(test|spec)\\.(ts)$',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    coveragePathIgnorePatterns: ['/node_modules/', '/src/svg'],
    coverageThreshold: {
        global: {
            functions: 2,
            lines: 1,
            statements: 1
        }
    },
    collectCoverageFrom: [`/src/**/*.{ts,js}`,`/src/*.{ts,js}`]
}

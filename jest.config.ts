import type { Config } from 'jest'

const config: Config = {
  roots: ['./src'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  preset: 'ts-jest',
}

export default config

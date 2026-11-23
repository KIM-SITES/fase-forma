import { defineConfig, devices } from '@playwright/test';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export default defineConfig({
  testDir: './tests',
  outputDir: join(tmpdir(), 'fase-forma-testes', 'resultados'),
  reporter: 'list',
  fullyParallel: false,
  workers: 1,
  timeout: 35_000,
  use: { baseURL: 'http://127.0.0.1:4321', screenshot: 'off', video: 'off', trace: 'off' },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: 'npm.cmd run preview -- --port 4321',
    url: 'http://127.0.0.1:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});

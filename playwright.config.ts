import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  workers: 1,
  //retries: 2, 
  expect: {
    timeout: 5000,
  },
  
  reporter: [['list'], ['html', { open: 'never' }]],
  projects: [
    //{ name: 'setup', testMatch: /.*\.setup\.ts/ },
    {
      name: 'edge',
      use: {
        browserName: 'chromium',
        //storageState: 'tests/auth.json',
        channel: 'msedge',
        headless: false,
        viewport: { width: 1280, height: 720 },
        //viewport: { width: 1980, height: 1080 },
        
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
  
      },
      //dependencies: ['setup'],
    },
  ],
});

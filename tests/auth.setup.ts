/// <reference types="node" />
import {test as setup} from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';


const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('setup authentication', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();

await page.waitForTimeout(2000);
await page.context().storageState({ path: authFile });


});
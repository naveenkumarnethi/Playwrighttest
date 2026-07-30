import { test, expect } from '@playwright/test';

import { LoginPage } from './TestLogin';
import { InventoryPage } from './Testinventory'
import {dt} from '../data/credentials.json';




test('login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inv = new InventoryPage(page);
    await loginPage.goto();
    //await page.waitForTimeout(20000);
    await loginPage.login(dt.username, dt.password);
    await page.waitForTimeout(10000);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page).toHaveTitle("Swag Labs");

    
    await inv.productname();

});

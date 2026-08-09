import {test, expect} from '@playwright/test';
import { TestLoginPage } from './Testlogin';
import { TestInventoryPage } from './testinventory.page';

test('test login', async ({page}) => {

  const testloginpage = new TestLoginPage(page);
  const inventorypage = new TestInventoryPage(page);

  await testloginpage.goto();
  await testloginpage.login('standard_user','secret_sauce');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await inventorypage.addProduct('Sauce Labs Backpack');
  await page.waitForTimeout(3000);

  await inventorypage.tocart();
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  await inventorypage.checkout();
});
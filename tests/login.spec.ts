import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { InventoryPage } from './pages/inventory.page';
import { CartPage } from './pages/cart.page';

test.only('add Sauce Labs Bolt T-Shirt, then checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  //await loginPage.goto();
  //await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await inventoryPage.addProductToCart('Sauce Labs Bolt T-Shirt');
  await inventoryPage.goToCart();

  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
  await cartPage.clickCheckout();

  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
});

test('login and filter products by Name (Z to A)', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await page.waitForTimeout(2000);

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await inventoryPage.sortNameZToA();
  await expect(inventoryPage.productNames).toHaveCount(6);
  await expect(inventoryPage.productNames.first()).toHaveText('Test.allTheThings() T-Shirt (Red)');
  await page.waitForTimeout(2000);
});

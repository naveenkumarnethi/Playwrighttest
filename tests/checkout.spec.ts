import { test, expect } from '@playwright/test';
import { readFileSync } from 'fs';
import path from 'path';
import { LoginPage } from './pages/login.page';
import { InventoryPage } from './pages/inventory.page';
import { CartPage } from './pages/cart.page';
import { CheckoutPage } from './pages/checkout.page';

const credentials = JSON.parse(
  readFileSync(path.join(__dirname, 'data', 'credentials.json'), 'utf8')
);

test('checkout Test.allTheThings() T-Shirt (Red)', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(credentials);

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await inventoryPage.addProductToCart('Test.allTheThings() T-Shirt (Red)');
  await inventoryPage.goToCart();

  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
  await cartPage.clickCheckout();

  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
  await checkoutPage.fillCustomerInformation('naveen', 'nethi', '500037');
  await checkoutPage.clickContinue();

  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
  await checkoutPage.clickFinish();

  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  await checkoutPage.expectCheckoutComplete();
});

import { test,Page, expect } from '@playwright/test';
import { dt } from '../data/credentials.json';

test('Test 1', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(dt.username);
    await page.getByPlaceholder('Password').fill(dt.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Swag Labs')).toBeEnabled();
    const cnt = await page.locator('.inventory_item').count();
    console.log("Total Products: " + cnt);
    for (let i = 0; i < cnt; i++) {
    const productname = await page.locator('.inventory_item_name').nth(i).textContent();
    console.log("Product Name: " + productname);
    }
    const prod = page.locator('.inventory_item',{hasText:'Sauce Labs Backpack'});
    await prod.locator('button:has-text("Add to cart")').click();
    await page.locator('#shopping_cart_container').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('First Name').fill('Naveen');
    await page.getByPlaceholder('Last Name').fill('Kumar');
    await page.getByPlaceholder('Zip/Postal Code').fill('500072');
    await page.locator('#continue').click();
    //await page.waitForTimeout(2000);
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");
    const cardno = await page.locator('[data-test="payment-info-value"]').textContent();
    console.log("Card Number: " + cardno);

    


    //await page.locator('.inventory_item_name').nth(0).click();
    await page.waitForTimeout(2000);

    })

    test('Test 2', async () => {
        let a = "121"
    });
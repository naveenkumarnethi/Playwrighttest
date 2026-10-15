import {test, expect} from '@playwright/test';
//testings changesessss updatess..ss
test('app test', async ({ page }) => {
    const usernames = 'standard_user';
    const passwords = 'secret_sauce';
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill(usernames);
    await page.getByPlaceholder('Password').fill(passwords);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    const products = await page.locator('.inventory_item_description');
    const productcount = await products.count();
    console.log("Total Products: " + productcount);

    for (let i = 0; i < productcount; i++) {
        const product = await products.nth(i);
        const title = await product.locator('.inventory_item_name').textContent();
        if (title === 'Sauce Labs Bike Light') {
            //await product.locator('button', { hasText: 'Add to cart' }).click();
            await product.getByRole('button', { name: 'Add to cart' }).click();
            //await expect(product.locator('button', { hasText: 'Remove' })).toBeVisible();
            await expect(product.getByRole('button', { name: 'Remove' })).toBeVisible();
            break;
        }

    }
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Doe');
    await page.getByPlaceholder('Zip/Postal Code').fill('12345');

    await page.locator('#continue').click();
    const paymentinfo = await page.locator('[data-test="payment-info-value"]').textContent();
    console.log("Payment Information: " + paymentinfo);

    await page.getByRole('button', { name: 'Finish' }).click();

    const sts = await page.locator('[data-test="complete-header"]').textContent();
    console.log("Status: " + sts);


});

import { test, expect} from '@playwright/test';

test('assertion test', async ({page})=>{
await page.goto("https://demo.nopcommerce.com/register");
await page.waitForTimeout(10000);
await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

await expect(page).toHaveTitle("nopCommerce demo store. Register");

});
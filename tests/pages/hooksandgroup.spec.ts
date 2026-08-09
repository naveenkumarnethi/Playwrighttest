import {test, expect} from '@playwright/test';

test('single dropdown test', async ({page})=>{

await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/online-store.html");

await page.locator('//select[@id="payment"]').selectOption("PhonePe");
//await page.locator('//select[@id="payment"]').selectOption([{index: 1},{value: "PhonePe" }]);

await page.waitForTimeout(2000);



})
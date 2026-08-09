import { test, expect } from '@playwright/test';

import { LoginPage } from './TestLogin';
import { InventoryPage } from './Testinventory'
import { dt } from '../data/credentials.json';




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

    await inv.productlist();

    await inv.addproducttocart(dt.product);
    await page.waitForTimeout(2000);



});


test('api testing', async ({ request }) => {
    const response = await request.post('https://conduit-api.bondaracademy.com/api/articles/',{
        headers: {
            Authorization: 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo2MzA1OX0sImlhdCI6MTc4NTc2MTY1NiwiZXhwIjoxNzkwOTQ1NjU2fQ.xM8W-YJubY9gdAfcz2mlwTRPbQLFAfiwIf2LZPO1qaI'

        },
        data: {
            "article": { title: "hello", description: "task", body: "bodyyyy", tagList: [] }
        }

    })
    const responseObject = await response.json();
    console.log(responseObject);
});

test('api delete testing', async ({ request }) => {
    const response = await request.delete('https://conduit-api.bondaracademy.com/api/articles/pipe-63059', {
        headers: {
            Authorization: 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo2MzA1OX0sImlhdCI6MTc4NTc2Mjc2NiwiZXhwIjoxNzkwOTQ2NzY2fQ.S1Ml7AUHLWTbMlkgP_cxjRhX3ZM8WWlhWFW2qIQNqvw'
        },
    });

    // Assert that the response was successful (status 2xx)
    //expect(response.ok()).toBeTruthy();

});

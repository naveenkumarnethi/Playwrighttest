import {test as base,Page} from '@playwright/test';

type Myfixture =
{
LoggedInPage: Page;
}

export const test = base.extend<Myfixture>({
LoggedInPage: async({page},use)=>{
await page.goto('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill("standard_user");
await page.getByPlaceholder('Password').fill("secret_sauce");
await page.locator('#login-button').click();


await use(page);
}

})

export {expect} from '@playwright/test';
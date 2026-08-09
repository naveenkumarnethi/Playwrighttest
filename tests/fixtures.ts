import {test as base, Page} from '@playwright/test';

type MyFixtures={
loggedInPage : Page;
}

export const test = base.extend<MyFixtures>({
loggedInPage: async ({page},use) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await page.waitForTimeout(2000);
    await use(page);
    console.log("last step");
  }
});
export {expect} from '@playwright/test';
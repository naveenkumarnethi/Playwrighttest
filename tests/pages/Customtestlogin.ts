import { test as base, Page } from '@playwright/test';

type LoginFixture = {
    loggedinpage: Page
};

export const test = base.extend<LoginFixture>({
    loggedinpage: async ({ page }, use) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator('input[name="username"]').fill('admin');
        await page.locator('input[name="password"]').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await use(page);
        console.log('Logout from the application');
        //await page.locator('.oxd-icon bi-caret-down-fill oxd-userdropdown-icon').click();
        //await page.getByRole('link', { name: 'Logout' }).click();

    },
});

export { expect } from '@playwright/test';
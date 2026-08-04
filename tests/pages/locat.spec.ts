import { expect, test } from '@playwright/test';

test('launch application', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');
    //await page.getByText('Forgot Your Password?').click();
    //await page.getByLabel('Remember me').click();
    //await page.waitForTimeout(2000);
    /*await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    */
    //await page.waitForTimeout(4000);
    //await page.locator("xpath=(//*[@class='inventory_container'])").filter({ hasText: 'Sauce Labs Bike Light' }).getByRole('button', { name: 'Add to cart' }).click();
    /*await expect(page).toHaveTitle('Swag Labs');
    await page.locator("#react-burger-menu-btn").click();
    await page.waitForTimeout(2000);
    page.getByRole('link', { name: 'Logout' }).click();
    await page.waitForTimeout(2000);

    const un = await page.locator('[data-test="login-credentials"]').textContent();
    console.log("The username is : " + un);
    */




    /*const finlocator = page.locator(".banner h1");

    const text = await finlocator.textContent();
    console.log("The text is : " + text);
    expect(text).toEqual('conduit');
    */

    await page.getByText('New user? Signup').click();
    await page.waitForLoadState('networkidle');

    const cnt = await page.locator('//input[@type="checkbox"]').count();
    expect(cnt).toEqual(8);

    await page.locator('.form-check-input').nth(3).check();
    await page.waitForTimeout(2000);

    await page.locator('#gender2').click();
    await page.waitForTimeout(2000);

    const a = await page.locator('//h1[text()="Learn Automation Courses"]').textContent();
    console.log("The text is : " + a);
})

test('testing app', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    const li = page.locator('//a[@class="subLink"]')
    await li.first().click();
    //await page.waitForTimeout(2000);
    //await page.waitForLoadState('networkidle');
    await page.getByPlaceholder('Password').waitFor({ state: 'visible' });
    const ch = page.locator('//input[@type="checkbox"]');
    //const cnt = await ch.count();
    //console.log("The count is : " + cnt);

    //await page.locator('//label[text()="JavaScript"]').click();
    //await page.waitForTimeout(2000);
    await page.getByAltText('menu').click();
    await page.locator('//div[text()="Practise"]').click();
    const text = await page.locator('(//h3)[2]').textContent()
    console.log("The text is : " + text);
    await page.waitForTimeout(2000);
})

test('API testing', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);

    const responseBody = await response.text();
    console.log("Response Body: " + responseBody);

});

test('date picker', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.fill('#datepicker','07/08/2026');
    const year = '2026';
    const month = "August";
    const date = '15';
    await page.locator('#datepicker').click();



    while (true) {
        const currentyear = await page.locator('.ui-datepicker-year').textContent();
        const currentmonth = await page.locator('.ui-datepicker-month').textContent();

        if (currentyear === year && currentmonth === month) {
            break;
        }
        await page.locator('[title="Next"]').click();


        await page.waitForTimeout(2000);
    }
    const dates = await page.$$('//a[@class="ui-state-default"]');
    /*for(const dt of dates){
    
    if (await dt.textContent() === date){
        await dt.click();
        await page.waitForTimeout(2000);
        break;
    }
    }*/
    await page.locator(`//a[text()="${date}"]`).click();
    await page.waitForTimeout(2000);

});

test.only('upload file', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const fileInput = page.locator('#singleFileInput');
    await fileInput.setInputFiles("C:\\Users\\naveen\\Desktop\\New folder\\UFT_updated.docx");
    await page.waitForTimeout(2000);
});


test('looping concept', async () => {
    // Add test steps here
    //await page.goto('https://freelance-learn-automation.vercel.app/login');
    //await page.waitForLoadState('networkidle');
    let i = 1;
    while (i <= 8) {
        console.log("The value of i is : " + i);
        if ( i === 5) {
            break;
        }
        i++;
        
    }
});
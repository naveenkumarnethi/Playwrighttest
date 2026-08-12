import { Locator, test, Page, expect } from '@playwright/test';




test('testing', async ({ page }) => {
    await page.goto('https://letcode.in/table');
    page.waitForSelector('#simpletable',{state:'visible'});
    const table = await page.locator('#simpletable');
    const header = await table.locator('thead');
    console.log(await header.allTextContents());;

    const row = await table.locator('tbody tr');
    const rowcount = await row.count();
    console.log("Total Rows: " + rowcount);
    await page.waitForTimeout(2000);

    const clm = row.first().locator('td');
    const clmcount = await clm.count();
    console.log("Total Columns: " + clmcount);

    await checkInput(row,page,"Raj");
   // await checkInput("Manvas");


 

});

   async function checkInput(row:Locator,page:Page,name: String) {
        const rowmatch = row.filter({
            has: page.locator("td"),
            hasText: name


        });

    
    await rowmatch.locator("input").check();
    await page.waitForTimeout(2000);
    }


    test.only('upload file',async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/');

        //const filepath = './test data/sample.pptx';

        await page.locator('#singleFileInput').setInputFiles('C://Users//naveen//Desktop//PlaywrightDemo//Playwrighttest//tests//test data//sample.pptx');
        await page.waitForTimeout(2000);

        await page.get



    });

    test('dialog test',async({page})=>{
        

        await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
        await page.getByText('Click for JS Alert').click();
        
        page.on('dialog', async(d1)=>{

            console.log(d1.message());
        })


        await page.waitForTimeout(4000);

    });

    test('testing locators',async ({page}) =>{
        await page.goto("https://www.saucedemo.com/");
        //await page.getByPlaceholder('Username').fill("abc");
        //await page.locator('#user-name').fill("abced");
        await page.locator('//input[@class="input_error form_input"]').first().fill("abc");
        await page.waitForTimeout(2000);

        await expect(page.locator('#user-name')).toBeVisible()

    });

    test('access modifier', async () => {
        class LoginPage{
            public username: String = "admin"

            public login(){
            console.log('login');
            }
        }
        class Manager extends LoginPage{
            approveleave(){
                console.log("leave approved")
            }

        }
        const mane = new Manager();
        console.log(mane.username);
        mane.approveleave();
        mane.approveleave();



    })


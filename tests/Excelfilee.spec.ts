import { test } from '@playwright/test';
import ExcelJs from 'exceljs';

/*
test("excel test2", async () => {
const workbook = new ExcelJs.Workbook();
await workbook.xlsx.readFile('tests/test data/Loginuser.xlsx');
const worksheet = workbook.getWorksheet('Test Data');
if (!worksheet) throw new Error("Worksheet 'Test Data' not found in Workbook");
const cellValue = worksheet.getCell('B2').value;
console.log('Cell B2 Value:', cellValue);   

});
*/

test('excel test3', async ({page}) => {
const workbook = new ExcelJs.Workbook();
await workbook.xlsx.readFile('tests/test data/Loginuser.xlsx');
const worksheet = workbook.getWorksheet('Test Data');
if (!worksheet) throw new Error("Worksheet 'Test Data' not found in Workbook");
const cellValue = worksheet.getCell('B3').value;
console.log('Cell B3 Value:', cellValue);   

await page.goto('https://www.saucedemo.com/');
await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page is fully loaded
await page.getByPlaceholder('Username').fill(cellValue as string);
await page.waitForTimeout(2000); 



});
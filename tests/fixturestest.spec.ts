import {test,expect} from '../tests/fixtures';

test('inventory page',async ({loggedInPage})=>{

await expect(loggedInPage).toHaveURL(/inventory/);

console.log(await loggedInPage.title());

const prod = await loggedInPage.locator('.inventory_item_name').nth(1).textContent();
console.log(prod);

});
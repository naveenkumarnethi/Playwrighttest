import {test,expect} from '../tests/fixtures';

test.only('inventory page',async ({LoggedInPage})=>{

await expect(LoggedInPage).toHaveURL(/inventory/);

console.log(await LoggedInPage.title());

const prod = await LoggedInPage.locator('.inventory_item_name').nth(2).textContent();
console.log(prod);

});

test('class test',async()=>{
class LoginPate{
username: string;
password: string;

constructor(username: string,password: string){
    this.username = username;
    this.password = password;
}

login(): void{
    console.log(`login with ${this.username}`);
}

}

const user = new LoginPate("admin","pass");
user.login();


});
import {test, expect, Page, Locator} from '@playwright/test';

export class TestLoginPage{
readonly page: Page;
readonly usernname: Locator;
readonly password: Locator;
readonly loginbutton: Locator;

constructor(page: Page){
this.page = page;
this.usernname = page.locator('[data-test="username"]');
this.password = page.locator('[data-test="password"]');
this.loginbutton = page.locator('[data-test="login-button"]');
};

async goto(){
await this.page.goto('https://www.saucedemo.com/');
};

async login(username: string, password: string){
await this.usernname.fill(username);
await this.password.fill(password);
await this.loginbutton.click();
};

};
import { Page, Locator, expect } from '@playwright/test';

interface LoginCredentials {
  username: string;
  password: string;
}

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;                                                                            
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(usernameOrCredentials: string | LoginCredentials, password?: string) {
    const username = typeof usernameOrCredentials === 'string'
      ? usernameOrCredentials
      : usernameOrCredentials.username;
    const passwordValue = typeof usernameOrCredentials === 'string'
      ? password ?? ''
      : usernameOrCredentials.password;

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(passwordValue);
    await this.loginButton.click();
  }

  async expectError() {
    await expect(this.errorMessage).toBeVisible();
  }
}

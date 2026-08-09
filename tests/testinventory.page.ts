import { Locator, Page } from '@playwright/test';

export class TestInventoryPage {
  readonly page: Page;
  readonly Sauceproduct: Locator;

  constructor(page: Page) {
    this.page = page;
    this.Sauceproduct = page.locator('.inventory_item_name');
  }

  async addProduct(Sauceproduct: string) {
    const productCard = this.page.locator('.inventory_item', {
      hasText: Sauceproduct,
    });
    await productCard.locator('button:has-text("Add to cart")').click();
  }

    async tocart(){

    await this.page.locator('.shopping_cart_link').click();
    }

    async checkout(){
    await this.page.locator('[data-test="checkout"]').click();
    }
}
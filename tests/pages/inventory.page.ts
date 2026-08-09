import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly cartButton: Locator;
  readonly sortSelect: Locator;
  readonly productNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartButton = page.locator('.shopping_cart_link');
    this.sortSelect = page.locator('[data-test="product-sort-container"]');
    this.productNames = page.locator('.inventory_item_name');
  }

  async addProductToCart(productName: string) {
    const productCard = this.page.locator('.inventory_item', {
      hasText: productName,
    });
    await productCard.locator('button:has-text("Add to cart")').click();
  }

  async goToCart() {
    await this.cartButton.click();
  }

  async sortNameZToA() {
    await this.sortSelect.selectOption('za');
  }
}

import { Page , Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page; 
  readonly product: Locator;
  readonly head: Locator;
    constructor(page: Page) {   
        this.page = page; 
        this.product = page.locator('.inventory_item_name' );
        this.head = page.locator('.app_logo');
    }

    async productname()
    {
        const headd = await this.head.textContent();
        console.log(headd);
    }

    async productlist()
    {
        const cnt = await this.product.count()
        console.log(cnt)
        for(let i=0; i < cnt; i++ )
        {
            //const name = await this.product.nth(i).textContent();
            //console.log(name);
            const na = await this.product.allTextContents();
            console.log(na);
        }

    }

    async addproducttocart(ProductName: string)
    {
        const productname = this.page.locator('.inventory_item',{hasText: ProductName,});
        await productname.locator('button:has-text("Add to cart")').click();
    }


}
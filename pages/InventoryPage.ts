import { Page, Locator,expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { CartPage } from './CartPage';

export class InventoryPage extends BasePage {
  readonly title:Locator;
  readonly firstItemAddtButton: Locator;
  readonly cartIcon: Locator;
 // readonly checkoutButton: Locator;
  
  constructor(page: Page) {
    super(page);
    this.title=page.locator('.title');
    this.firstItemAddtButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon=page.locator('.shopping_cart_link');
    //this.checkoutButton = page.locator('[data-test="checkout"]');
  }
  async expectLoggedIn(){
    await expect(this.title).toHaveText('Products');
  }
 /* async checkout() {
    await this.checkoutButton.click();
  }*/
  async addFirstItemToCart() {
    await this.firstItemAddButton.click();
  }
  async goToCartt():Promise<CartPage> {
    await this.cartIcon.click();
    return new CartPage(this.page);
  }
}

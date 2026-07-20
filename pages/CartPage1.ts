import { Page, Locator,expect } from '@playwright/test';
import { BasePage } from './BasePage';
//import { CartPage } from './CartPage';

export class CartPage extends BasePage {
 readonly checkoutButton: Locator;
  
  constructor(page: Page) {
    super(page);
    //this.title=page.locator('.title');
    //this.firstItemAddtButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    //this.cartIcon=page.locator('.shopping_cart_link');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }
  /*async expectLoggedIn(){
    await expect(this.title).toHaveText('Products');
  }*/
  async checkout() {
    await this.checkoutButton.click();
  }
}

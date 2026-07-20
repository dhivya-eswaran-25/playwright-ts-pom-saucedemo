import { Page, Locator,expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly title:Locator;
  readonly checkoutButton: Locator;
  
  constructor(page: Page) {
    super(page);
    this.title=page.locator('.title');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }
  async expectLoggedIn(){
    await expect(this.title).toHaveText('Products');
  }
  async checkout() {
    await this.checkoutButton.click();
  }
}

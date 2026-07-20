import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly checkoutButton: Locator;
  
  constructor(page: Page) {
    super(page);
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }
  async expectLoggedIn(){
    await expect(this.title).toHaveText('Products');
  }
  async checkout() {
    await this.checkoutButton.click();
  }
}

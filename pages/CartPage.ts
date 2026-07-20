import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { CartPage } from './CartPage';

export class InventoryPage extends BasePage {
  readonly addToCartButton: Locator;
  readonly cartIcon: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.pageTitle = page.locator('.title');
  }

  async expectLoggedIn() {
    await expect(this.page).toHaveURL(/.*inventory.html/);
    await expect(this.pageTitle).toHaveText('Products');
  }

  async addFirstItemToCart() {
    await this.addToCartButton.click();
  }

  async goToCart(): Promise<CartPage> {
    await this.cartIcon.click();
    return new CartPage(this.page);
  }
}

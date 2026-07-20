import { test } from '../fixtures/test-fixtures';

test('add item to cart', async ({ loginPage }) => {
  await loginPage.goto();
  const inventoryPage = await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addFirstItemToCart();
  const cartPage = await inventoryPage.goToCart();
  await cartPage.checkout();
});

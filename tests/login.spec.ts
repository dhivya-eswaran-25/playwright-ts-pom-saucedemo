import { test, expect } from '../fixtures/test-fixtures';

test.describe('Login Tests', () => {
  test('valid login', async ({ loginPage }) => {
    await loginPage.goto();
    const inventoryPage = await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.expectLoggedIn();
  });

  test('invalid login shows error', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.errorMessage).toContainText('Epic sadface');
  });
});

const { test, expect } = require('@playwright/test');

test('add product to cart', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.locator('[data-test="search-query"]').fill('Hammer');
  await page.locator('[data-test="search-submit"]').click();

  const product = page.getByRole('link', { name: /Hammer/i }).first();

  await expect(product).toBeVisible();
  await product.click();

  await expect(page).toHaveURL(/product/);

  await page.getByRole('button', { name: /add to cart/i }).click();

  await page.locator('[data-test="nav-cart"]').click();

  await expect(page.getByText(/Hammer/i).first()).toBeVisible();
});
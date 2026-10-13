const { test, expect } = require('@playwright/test');

test('open product detail and verify product information', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.locator('[data-test="search-query"]').fill('Hammer');
  await page.locator('[data-test="search-submit"]').click();

  const product = page.getByRole('link', { name: /Hammer/i }).first();

  await expect(product).toBeVisible();
  await product.click();

  await expect(page).toHaveURL(/product/);

  await expect(page.getByText(/Hammer/i).first()).toBeVisible();
  await expect(page.locator('[data-test="unit-price"]')).toBeVisible();
  await expect(page.getByRole('button', { name: /add to cart/i })).toBeVisible();
});
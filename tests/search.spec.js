const { test, expect } = require('@playwright/test');

test('search for an existing product', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.locator('[data-test="search-query"]').fill('Hammer');
  await page.locator('[data-test="search-submit"]').click();

  await expect(page.getByText(/Hammer/i).first()).toBeVisible();
});


test('search for a non-existing product', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.locator('[data-test="search-query"]').fill('NonExistingProduct123');
  await page.locator('[data-test="search-submit"]').click();

  await expect(page.getByText(/no products/i)).toBeVisible();
});
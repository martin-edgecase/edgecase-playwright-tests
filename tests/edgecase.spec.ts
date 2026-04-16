import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('https://edgecase.sk/');
  await expect(page).toHaveTitle(/edgecase/i);
  await expect(page.locator('h1')).toContainText('senior qa lead');

});

test('linkedin button triggers navigation', async ({ page }) => {
  await page.goto('https://edgecase.sk/');

  const linkedin = page.locator('.linkedin-btn');

  await expect(linkedin).toBeVisible();

  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    linkedin.click()
  ]);

  await expect(newPage).toHaveURL(/linkedin/);
});
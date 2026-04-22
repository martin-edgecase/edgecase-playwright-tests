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

test('email field validates input', async ({ page }) => {
  await page.goto('/');

  const input = page.locator('input[type="email"]');
  const button = page.getByRole('button', { name: 'Get in touch' });

  // invalid email
  await input.fill('not-an-email');
  await button.click();

  // browser should block submission
  await expect(input).toBeFocused();

  // valid email
  await input.fill('test@example.com');
  await button.click();

  // success message appears
  await expect(page.locator('.success-message')).toBeVisible();
});
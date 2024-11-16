import { devices, expect, test } from '@playwright/test';

for (let i = 0; i < 10; ++i) {
  
  test ('chrome browser instances ' + i, {
    tag: '@slow',
  }, async ({ playwright, page, }) => {
    const browser = await playwright.chromium.launch();
    try {
      await page.goto('https://playwright.dev/');
      await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    } finally {
      await browser.close();
    }
  });
}

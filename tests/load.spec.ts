import { devices, expect, test } from '@playwright/test';

for (let i = 0; i < 10; ++i) {
  
  test ('chrome browser instances ' + i, {
    tag: '@fast',
  }, async ({ playwright, page, }) => {
    const browser = await playwright.chromium.launch();
    // await page.route('**', route => {
    //   console.log(route.request().url());
    //   route.continue();
    // });
    try {
      await page.goto('https://playwright.dev/');
      await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    } finally {
      await browser.close();
    }
  });
}

import { devices, expect, test } from '@playwright/test';

// call 10 times endpoint
// for (let i = 0; i < 10; ++i) 
//   { + i,
  test ('chrome browser instances ' , {
    tag: '@fast',
  }, 
  async ({ playwright, page }) => {
    const browser = await playwright.chromium.launch();

    await page.route('**', route => {
      console.log(route.request().url());
      route.continue(); 
    });
   
    try {
      await page.goto('https://playwright.dev/');
      await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();

      await page.screenshot({ path: 'screenshot.png', fullPage: true });

      await page.routeWebSocket('wss://socketsbay.com/wss/v2/1/demo/', ws => {
        ws.onMessage(message => {
          if (message === 'request')
            ws.send('response');

        });
      });

    } finally {
      await browser.close();
    }
   
 });
// }

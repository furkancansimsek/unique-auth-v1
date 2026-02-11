import { chromium } from 'playwright';

async function takeScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const page = await context.newPage();

  await page.goto('http://localhost:3000');
  await page.screenshot({ path: 'screenshot-home.png', fullPage: false });

  await page.goto('http://localhost:3000/register');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-register.png', fullPage: false });

  await page.goto('http://localhost:3000/login');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshot-login.png', fullPage: false });

  await browser.close();
  console.log('Screenshots saved!');
}

takeScreenshots().catch(console.error);

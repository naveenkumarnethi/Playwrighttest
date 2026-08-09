const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  await page.waitForURL('**/inventory.html', { timeout: 20000 });
  console.log('page.url=', page.url());
  const selects = await page.$$eval('select', els => els.map(el => ({ outerHTML: el.outerHTML, id: el.id, dataset: el.dataset, name: el.name, options: Array.from(el.options).map(o => ({ value: o.value, text: o.text })) })));
  console.log('selects=', selects);
  const exists = await page.$('[data-test="product_sort_container"]');
  console.log('sortExists=', Boolean(exists));
  if (exists) {
    console.log('outerHTML=', await page.evaluate(el => el.outerHTML, exists));
  }
  await browser.close();
})();

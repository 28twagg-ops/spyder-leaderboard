// Run against the local production preview. Playwright is a QA-only dependency.
const assert = require('node:assert/strict')
const { chromium } = require('playwright')

async function check() {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined })
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true })
    const page = await context.newPage()
    const origin = 'http://127.0.0.1:4173'
    const external = new Set()
    const exceptions = []
    context.on('request', request => {
      if (new URL(request.url()).origin !== origin) external.add(request.url())
    })
    page.on('pageerror', error => exceptions.push(error.message))
    const routes = ['/', '/timeline', '/explore', '/research/EV-ART-001', '/evidence', '/library', '/visuals', '/install']
    for (const route of routes) {
      await page.goto(origin + route)
      await page.locator('h1').waitFor()
      await page.evaluate(() => document.fonts.ready)
      for (const width of [320, 375, 390, 430, 768, 1024, 1440]) {
        await page.setViewportSize({ width, height: 844 })
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width, route)
      }
      await page.setViewportSize({ width: 320, height: 844 })
      await page.addStyleTag({ content: 'html { font-size: 200% !important; }' })
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), 320, route)
    }
    await page.goto(origin + '/visuals')
    await page.locator('.visual-card').first().waitFor()
    assert.equal(await page.locator('.visual-card').count(), 44)
    assert.equal(await page.locator('img, video, iframe').count(), 0)
    assert.equal(await page.getByRole('button', { name: /development preview/i }).count(), 0)
    await page.evaluate(() => navigator.serviceWorker.ready)
    await page.reload()
    await page.waitForFunction(() => Boolean(navigator.serviceWorker.controller))
    await context.setOffline(true)
    await page.goto(origin + '/evidence')
    await page.locator('#evidence-kind').selectOption('nutrients')
    await page.locator('#evidence-page').selectOption('21')
    await page.getByText(/Showing 401–403 of 403/).waitFor()
    assert.equal(await page.locator('article').count(), 3)
    assert.deepEqual([...external], [])
    assert.deepEqual(exceptions, [])
    console.log('Responsive routes, enlarged text, production media and offline nutrient pagination passed.')
  } finally {
    await browser.close()
  }
}

check().catch(error => {
  console.error(error)
  process.exitCode = 1
})

# 19 Playwright Basics

First real-world end-to-end browser automation test using Playwright.

## Concepts

- **Playwright**: A Node.js library for automating Chromium, Firefox, and WebKit browsers with a single API.
- **Page Object**: Represents a single tab in the browser. All interactions happen through the page.
- **Locators**: A way to find elements on the page at any moment. Playwright auto-waits for elements to be actionable.
- **Actions**: Methods to interact with elements, such as `click()`, `fill()`, `selectOption()`, and `press()`.
- **Assertions**: Built-in auto-retrying assertions via `expect()` to verify page state.
- **Test Steps**: Logical grouping of actions inside a test using `test.step()` for better reporting.
- **Headless vs Headed**: Headless runs without a visible browser window; headed shows the browser.
- **Test Config**: Global settings for browser type, viewport, timeout, retries, and reporting.

## Examples

```javascript
// Basic Playwright test structure
import { test, expect } from '@playwright/test';

test('basic navigation', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
});

// Locators and actions
await page.locator('#username').fill('admin');
await page.locator('#password').fill('secret');
await page.locator('#login-btn').click();

// Assertions
await expect(page.locator('.welcome-msg')).toHaveText('Welcome!');
await expect(page).toHaveURL(/dashboard/);

// Test steps
test('checkout flow', async ({ page }) => {
    await test.step('Login', async () => {
        await page.goto('/login');
        await page.fill('#user', 'test');
        await page.click('#submit');
    });
    await test.step('Add to cart', async () => {
        await page.click('.add-to-cart');
    });
});
```

---

*Part of the [Playwright2xLearning](../README.md) repository.*

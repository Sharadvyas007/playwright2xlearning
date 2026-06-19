import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('tta_secret');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-test-allthethings-tshirt-red"]').click();
    await page.locator('[data-test="add-to-cart-tta-bike-light"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Sharad');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('Pareek');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('342001');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="checkout-complete-container"]').click();
});
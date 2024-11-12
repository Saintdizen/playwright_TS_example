import { test, expect } from '@playwright/test';
import { allure } from "allure-playwright";

test('get started link', async ({ page }) => {
  await allure.description("Описание или сценарий");

  await allure.step("Шаг 1", async () => {
    await page.goto('https://playwright.dev/');
  });

  await allure.step("Шаг 2", async () => {
    await page.getByRole('link', { name: 'Get started' }).click();
  });

  await allure.step("Шаг 3", async () => {
    await expect(page.getByRole('heading', { name: 'Installation1' })).toBeVisible();
  });

});

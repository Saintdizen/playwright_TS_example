//https://playwright.dev/docs/locators

import { test } from '@playwright/test';

test('getByTestId', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Функция getByTestId
    // Будет искать элементы в которых есть атрибут data-testid, например: <button data-testid="directions">Itinéraire</button>
    await page.getByTestId('directions')
});

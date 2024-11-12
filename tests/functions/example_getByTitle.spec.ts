//https://playwright.dev/docs/locators

import { test } from '@playwright/test';

test('getByTitle', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Функция getByTitle
    // Будет искать элементы в которых есть атрибут title, например: <button title='text'>...</button>
    // Опция {exact: true} будет искать точное совпадение, без опции будет работать как CONTAINS
    await page.getByTitle('Switch between dark and light mode (currently dark mode)')
    await page.getByTitle('Switch between dark and light mode (currently dark mode)', {exact: true})
});

//https://playwright.dev/docs/locators

import { test } from '@playwright/test';

test('getByText', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Функция getByText
    // Без дополнительных опций функция работает как CONTAINS, то есть вернет все элеметы, где содержится текст Playwright
    console.log("\nБез дополнительных опция работает как CONTAINS, тоесть вернет все элеметы, где содержится текст Playwright\n")
    let getByText1 = await page.getByText("Playwright")

    // Просто вывод текста, который содержится в элементах
    for (let elem of await getByText1.all()) console.log(await elem.textContent())

    // При добавлении опции {exact: true}, функция вернет элементы, где есть только текст Playwright
    console.log("\nПри добавлении опции {exact: true}, функция вернет элементы, где есть только текст Playwright\n")
    let getByText2 = await page.getByText("Playwright", {exact: true})

    // Просто вывод текста, который содержится в элементах
    for (let elem of await getByText2.all()) console.log(await elem.textContent())
});

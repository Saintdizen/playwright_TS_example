import {expect, test} from "../framework/fixtures.spec";

test.describe('exampleSCREENSHOTS', () => {

    // test.beforeEach(async ({ page }) => { /**/ });

    test('exampleSCREENSHOTS', async ({page}) => {
        // Пример - простой вариант!
        // Открываем страницу
        await page.goto('https://playwright.dev/');
        // Делаем снимок
        const beforeImage = await page.screenshot({
            path: `./files/screenshots/before.png`
        });
        // После выполняем дейтсвия, которые приводят к изменению страницы
        // или просто открываем другую)
        // await page.goto('https://google.com/');
        // Делаем снимок
        const afterImage = await page.screenshot({
            path: `./files/screenshots/after.png`
        });

        // Проверяем два снимка
        // 0 Снимки равны
        // 1 массив данных первого снимка больше массива данных второго снимка
        // -1 массив данных первого снимка меньше массива данных второго снимка
        expect(Buffer.compare(beforeImage, afterImage)).toEqual(0);


        // Вариант больше подходит для проверки открытия нужной страницы
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveScreenshot();

        // await page.goto('https://playwright.dev/');
        // expect(await page.textContent("//body")).toMatchSnapshot("text.txt");
    });
});
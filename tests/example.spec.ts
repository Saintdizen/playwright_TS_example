import {test} from "@playwright/test";
import {ExamplePage} from "./page";

test('example', async ({page}) => {
    const testPage = new ExamplePage(page);
    await testPage.open()
    await testPage.link.click()
    await testPage.check.toBeVisible()
    await testPage.check2.click()
    await page.bringToFront()
    await testPage.check3.toBeVisible()
});
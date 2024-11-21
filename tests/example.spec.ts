import {test} from "@playwright/test";
import {ExamplePage} from "./page";

test.describe('example', () => {
    let testPage: ExamplePage;

    test.beforeEach(async ({ page }) => {
        testPage = new ExamplePage(page);
    });

    test('example', async () => {
        await testPage.open()
        //
        await testPage.link.click()
        await testPage.check.toBeVisible()
        await testPage.closePage()
        //
        await testPage.link.click()
        await testPage.check.toBeVisible()
        await testPage.check2.click()
        await testPage.check3.toBeVisible()
    });
});
import {test} from "../framework/fixtures.spec";

test.describe('example', () => {

    // test.beforeEach(async ({ page }) => { /**/ });

    test('example', async ({pages}) => {
        await pages.examplePage.open()
        //
        await pages.examplePage.link.click()
        await pages.examplePage.check.toBeVisible()
        await pages.examplePage.closePage()
        //
        await pages.examplePage.link.click()
        await pages.examplePage.check.toBeVisible()
        await pages.examplePage.check2.click()
        await pages.examplePage.check3.toBeVisible()
    });
});
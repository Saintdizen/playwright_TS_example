import {test} from "../framework/fixtures.spec";

test.describe('example', () => {

    // test.beforeEach(async ({ page }) => { /**/ });

    test('example', async ({pages}) => {
        await pages.examplePage.open()
        //
        await pages.examplePage.link1.click()
        await pages.examplePage.check.toBeVisible()
        await pages.examplePage.closePage()
        //
        await pages.examplePage.link1.click()
        await pages.examplePage.check.toBeVisible()
        await pages.examplePage.check2.click()
        await pages.examplePage.check3.toBeVisible()
        await pages.examplePage.closePage()
        //
        const links = pages.examplePage.links.getCollection()
        for (let link of await links) {
            console.log(await link.getAttribute('href'))
        }
        //
        await pages.examplePage.link2.click()
    });
});
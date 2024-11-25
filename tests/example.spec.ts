import {test} from "../framework/fixtures.spec";

test.describe('example', () => {

    // test.beforeEach(async ({ page }) => { /**/ });

    test('example', async ({pages}) => {
        await pages.examplePage.open(pages.examplePage.url)
        //
        await pages.examplePage.link1.click()
        await pages.examplePage.check.toBeVisible()
        await pages.examplePage.closePage()
        //
        await pages.examplePage.exampleFunction()
        //
        for (let link of await pages.examplePage.links.getCollection()) {
            console.log(await link.getAttribute('href'))
        }
        //
        await pages.examplePage.link2.click()
        await pages.examplePage.textContainsPage(['Playwright has its own test runner for end-to-end tests, we call it Playwright Test.'])
    });
});
import {test} from "../framework/fixtures.spec";

test.describe('example', () => {

    // test.beforeEach(async ({ page }) => { /**/ });

    test('example', async ({NikaZeBest}) => {
        await NikaZeBest.examplePage.open(NikaZeBest.examplePage.url)
        //
        await NikaZeBest.examplePage.link1.click()
        await NikaZeBest.examplePage.check.toBeVisible()
        await NikaZeBest.examplePage.browser().closeTab()
        //
        await NikaZeBest.examplePage.exampleFunction()
        //
        for (let link of await NikaZeBest.examplePage.links.getCollection()) {
            console.log(await link.getAttribute('href'))
        }
        //
        await NikaZeBest.examplePage.link2.click()
        await NikaZeBest.examplePage.textContainsPage(['Playwright has its own test runner for end-to-end tests, we call it Playwright Test.'])
    });
});
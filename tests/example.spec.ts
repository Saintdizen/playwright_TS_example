import {test} from "../framework/fixtures.spec";
import {ExamplePage} from "./page";

test('example', async ({page}) => {
    let testPage = new ExamplePage(page);
    await testPage.open()
    await testPage.link.click()
    await testPage.check.toBeVisible()
    await testPage.link.click()

    // await testPage.clickLinkAndCheck(testPage.link, "//a[text()='playwright']", page)
    // await testPage.clickLinkAndCheck(testPage.link, "//a[text()='playwright']", page)
});
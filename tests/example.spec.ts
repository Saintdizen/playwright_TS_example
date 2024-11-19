//https://playwright.dev/docs/locators

import {expect, test} from '@playwright/test';
import {ExamplePage} from "./page";

test('example', async ({ page }) => {
    let testPage = new ExamplePage(page);
    await testPage.open()

    await testPage.clickLinkAndCheck(testPage.link, "//a[text()='playwright']", page)
    await testPage.clickLinkAndCheck(testPage.link, "//a[text()='playwright']", page)
});




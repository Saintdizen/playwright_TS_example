import {expect, type Locator, type Page} from '@playwright/test';

export class ExamplePage {
    url = 'https://playwright.dev/';
    constructor(public page: Page) {}
    public link: Locator = this.page.locator('//*[@aria-label="Star microsoft/playwright on GitHub"]')
    public checkText: Locator = this.page.locator("")

    async open() {
        await this.page.goto(this.url)
    }

    async clickLinkAndCheck(elementClick: Locator, searchElement: string, page: Page): Promise<void> {
        await elementClick.click()
        let newPage = await page.context().waitForEvent("page")
        await newPage.waitForLoadState()
        await expect(newPage.locator(searchElement)).toBeVisible()
        await newPage.close()
    }
}
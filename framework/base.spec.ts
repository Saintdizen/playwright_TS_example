import {Page, expect} from "@playwright/test";

export class BasePage {
    static pages: Page[] = [];
    constructor(readonly page: Page) {  }

    async initPage(): Promise<Page> {
        return await new Promise(async (resolve) => {
            try {
                BasePage.pages = await Promise.all([this.page.context().waitForEvent("page", {timeout: 750})])
                resolve(BasePage.pages[BasePage.pages.length - 1]);
            } catch (e) {
                resolve(BasePage.pages[BasePage.pages.length - 1] || this.page)
            }
        })
    }

    async closePage(): Promise<void> {
        const page = await this.initPage()
        await page.close()
        BasePage.pages = []
        const page1 = await this.initPage()
        await page1.bringToFront()
    }

    async open(path: string) {
        await this.page.goto(path);
    }

    element(xpath: string): Element {
        return new Element(xpath, this.page);
    }
}

export class Element extends BasePage {
    constructor(readonly locator: string, readonly page: Page) { super(page) }

    async click(): Promise<void> {
        const page = await this.initPage()
        await page.locator(this.locator).click()
    }

    async toBeVisible(): Promise<void> {
        const page = await this.initPage()
        await expect(page.locator(this.locator)).toBeVisible()
    }
}
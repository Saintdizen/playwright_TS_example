import {expect, Locator, Page} from "@playwright/test";

export class Element {
    public event: Promise<Page>
    constructor(public xpath: string) {
        this.event = global.PAGE.context().waitForEvent('page')
    }
    public element: Locator = global.PAGE.locator(this.xpath)

    getXpath() {
        return this.xpath;
    }

    async click(): Promise<void> {
        console.log(this.event)
        await global.PAGE.locator(this.xpath).click()
        const newPage = global.PAGE || await this.event;


    }

    async toBeVisible() {
        console.log(this.event)
        const newPage = global.PAGE || await this.event;
        await expect(newPage.locator(this.xpath)).toBeVisible()
    }
}
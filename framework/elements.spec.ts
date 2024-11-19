import {expect, Page} from "@playwright/test";

class Pages {
    private test: Page = global.PAGE;
    constructor() {
        global.PAGE.context().on("page", (page: Page) => {
            this.setPage(page)
        })
    }
    private setPage(page: Page): void {
        this.test = page
    }
    page(): Page {
        return this.test
    }
}

class Options extends Pages {
    constructor(public xpath: string) {
        super()
    }

    async click(): Promise<void> {
        const page = this.page()
        await page.locator(this.xpath).click()
    }

    async toBeVisible() {
        const page = this.page()
        console.log(page.context().pages().length)
        await expect(page.locator(this.xpath)).toBeVisible()
    }
}

export class Element extends Options {
    constructor(public xpath: string) {
        // @ts-ignore
        super()
    }
    async getXpath() {
        return this.xpath
    }
}


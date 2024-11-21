import {Page, expect} from "@playwright/test";

export class BasePage {
    constructor(public page: Page) {
        this.page.context().on("page", (page: Page) => this.setPages(page))
    }
    private setPages(page: Page) {
        this.page = page
    }

    async open(path: string) {
        await this.page.goto(path);
    }



    element(xpath: string): Element {
        return new Element(xpath, this.page);
    }
}

let [newPage]: Page[] = [];

export class Element {
    constructor(public locator: string, public page: Page) {}

    async test(): Promise<Page> {
        return await new Promise(async (resolve) => {
            try {
                [newPage] = await Promise.all(
                    [
                        this.page.context().waitForEvent("page", {timeout: 750})
                    ]
                )
                resolve(newPage);
            } catch (e) {
                resolve(newPage || this.page)
            }
        })
    }

    async click(): Promise<void> {
        const page = await this.test()
        await page.locator(this.locator).click()
    }

    async toBeVisible(): Promise<void> {
        const page = await this.test()
        await expect(page.locator(this.locator)).toBeVisible()
    }
}
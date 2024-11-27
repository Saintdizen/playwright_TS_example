import {Page} from "@playwright/test";

export class BaseBrowser {
    private page: Page;
    private pages: Page[] = [];

    setPage(page: Page) {
        this.page = page
    }

    async initTab(): Promise<Page> {
        return await new Promise(async (resolve) => {
            try {
                this.pages = await Promise.all([this.page.context().waitForEvent("page", {timeout: 1000})])
                resolve(this.pages[this.pages.length - 1]);
            } catch (e) {
                resolve(this.pages[this.pages.length - 1] || this.page)
            }
        })
    }

    async open(path: string) {
        const page = await this.initTab()
        await page.goto(path)
    }

    async closeTab(): Promise<void> {
        const page = await this.initTab()
        await page.close()
        this.pages = []
        const page1 = await this.initTab()
        await page1.bringToFront()
    }

    async switchFirstTab(): Promise<void> {
        const page = await this.initTab()
        await page.context().pages()[0].bringToFront()
    }

    async switchNextTab(): Promise<void> {
        const page = await this.initTab()
        const pages = page.context().pages()
        await pages[pages.indexOf(page) + 1].bringToFront()
    }

    async closeOtherTabs(): Promise<void> {
        const page = await this.initTab()
        const pages = page.context().pages()
        const index = pages.indexOf(page)
        for (let page of pages) {
            if (pages.indexOf(page) !== index) {
                await page.close()
            }
        }
    }
}

export const baseBrowser = new BaseBrowser()
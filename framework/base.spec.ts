export {Page} from '@playwright/test';
import {Page, expect} from "@playwright/test";

class BaseBrowser {
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

    async closeTab(): Promise<void> {
        const page = await baseBrowser.initTab()
        await page.close()
        this.pages = []
        const page1 = await baseBrowser.initTab()
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

const baseBrowser = new BaseBrowser();

export class BasePage {
    constructor(readonly page: Page) { baseBrowser.setPage(page); }
    browser(): BaseBrowser { return baseBrowser }

    async textContainsPage(texts: string[]): Promise<void> {
        const page = await baseBrowser.initTab()
        for (let text of texts) {
            const element = page.getByText(text, {exact: true})
            await expect(element).toBeVisible();
        }
    }

    async open(path: string) {
        const page = await baseBrowser.initTab()
        await page.goto(path)
    }
}

class BaseElement {
    constructor(readonly xpath: string) { }

    // Действия
    async click(): Promise<void> {
        const page = await baseBrowser.initTab()
        await page.locator(this.xpath).click()
    }

    async fill(text: string): Promise<void> {
        const page = await baseBrowser.initTab()
        await page.locator(this.xpath).fill(text)
    }

    //
    async getCollection() {
        const page = await baseBrowser.initTab()
        return await page.locator(this.xpath).all()
    }

    // Проверки
    async toBeVisible(): Promise<void> {
        const page = await baseBrowser.initTab()
        await expect(page.locator(this.xpath)).toBeVisible()
    }

    async toBeHidden(): Promise<void> {
        const page = await baseBrowser.initTab()
        await expect(page.locator(this.xpath)).toBeHidden()
    }

    async toBeEnabled(): Promise<void> {
        const page = await baseBrowser.initTab()
        await expect(page.locator(this.xpath)).toBeEnabled()
    }

    async toBeDisabled(): Promise<void> {
        const page = await baseBrowser.initTab()
        await expect(page.locator(this.xpath)).toBeDisabled()
    }
}

export class Element extends BaseElement {
    constructor(readonly xpath: string) {
        super(xpath)
    }
}

export class Link extends BaseElement {
    constructor(readonly text: string) {
        super(`//a[text()='${text}'] | //a[@aria-label='${text}'] | //a[@id='${text}']`)
    }
}

export class Button extends BaseElement {
    constructor(readonly text: string) {
        super(`//button[text()='${text}'] | //button[@aria-label='${text}'] | //button[@id='${text}']`)
    }
}
import {Page, expect} from "@playwright/test";

export class BaseBrowser {
    page: Page;
    pages: Page[] = [];

    constructor() {}

    setPage(page: Page) {
        this.page = page
    }

    async initPage(): Promise<Page> {
        return await new Promise(async (resolve) => {
            try {
                this.pages = await Promise.all([this.page.context().waitForEvent("page", {timeout: 750})])
                resolve(this.pages[this.pages.length - 1]);
            } catch (e) {
                resolve(this.pages[this.pages.length - 1] || this.page)
            }
        })
    }
}

const browser = new BaseBrowser();

export class BasePage {
    constructor(readonly page: Page) {
        browser.setPage(page)
    }

    async textContainsPage(texts: string[]): Promise<void> {
        const page = await browser.initPage()
        for (let text of texts) {
            const element = page.getByText(text, {exact: true})
            await expect(element).toBeVisible();
        }
    }

    async switchFirstWindow(): Promise<void> {
        const page = await browser.initPage()
        await page.context().pages()[0].bringToFront()
    }

    async switchNextWindow(): Promise<void> {
        const page = await browser.initPage()
        const pages = page.context().pages()
        await pages[pages.indexOf(page) + 1].bringToFront()
    }

    async closeOtherWindows(): Promise<void> {
        const page = await browser.initPage()
        const pages = page.context().pages()
        const index = pages.indexOf(page)
        for (let page of pages) {
            if (pages.indexOf(page) !== index) {
                await page.close()
            }
        }
    }

    async closePage(): Promise<void> {
        const page = await browser.initPage()
        await page.close()
        browser.pages = []
        const page1 = await browser.initPage()
        await page1.bringToFront()
    }

    async open(path: string) {
        await this.page.goto(path);
    }

    basic() {
        return this.page
    }

    element(xpath: string): Element {
        return new Element(xpath);
    }

    a(text: string): Link {
        return new Link(text);
    }

    button(text: string): Button {
        return new Button(text);
    }
}

class BaseElement {
    constructor(readonly xpath: string) { }

    // Действия
    async click(): Promise<void> {
        const page = await browser.initPage()
        await page.locator(this.xpath).click()
    }

    async fill(text: string): Promise<void> {
        const page = await browser.initPage()
        await page.locator(this.xpath).fill(text)
    }

    //
    async getCollection() {
        const page = await browser.initPage()
        return await page.locator(this.xpath).all()
    }

    // Проверки
    async toBeVisible(): Promise<void> {
        const page = await browser.initPage()
        await expect(page.locator(this.xpath)).toBeVisible()
    }

    async toBeHidden(): Promise<void> {
        const page = await browser.initPage()
        await expect(page.locator(this.xpath)).toBeHidden()
    }

    async toBeEnabled(): Promise<void> {
        const page = await browser.initPage()
        await expect(page.locator(this.xpath)).toBeEnabled()
    }

    async toBeDisabled(): Promise<void> {
        const page = await browser.initPage()
        await expect(page.locator(this.xpath)).toBeDisabled()
    }
}

class Element extends BaseElement {
    constructor(readonly xpath: string) {
        super(xpath)
    }
}

class Link extends BaseElement {
    constructor(readonly text: string) {
        super(`//a[text()='${text}'] | //a[@aria-label='${text}'] | //a[@id='${text}']`)
    }
}

class Button extends BaseElement {
    constructor(readonly text: string) {
        super(`//button[text()='${text}'] | //button[@aria-label='${text}'] | //button[@id='${text}']`)
    }
}
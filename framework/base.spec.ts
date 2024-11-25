import {Page, expect} from "@playwright/test";
import vars from "./vars.spec";

export class BasePage {
    constructor(readonly page: Page) {  }

    async initPage(): Promise<Page> {
        return await new Promise(async (resolve) => {
            try {
                vars.pages = await Promise.all([this.page.context().waitForEvent("page", {timeout: 750})])
                resolve(vars.pages[vars.pages.length - 1]);
            } catch (e) {
                resolve(vars.pages[vars.pages.length - 1] || this.page)
            }
        })
    }

    async closePage(): Promise<void> {
        const page = await this.initPage()
        await page.close()
        vars.pages = []
        const page1 = await this.initPage()
        await page1.bringToFront()
    }

    async open(path: string) {
        await this.page.goto(path);
    }

    basic() {
        return this.page
    }

    element(xpath: string): Element {
        return new Element(xpath, this.page);
    }

    a(text: string): Element {
        return new Link(text, this.page);
    }
}

class BaseElement extends BasePage {
    constructor(readonly locator: string, readonly page: Page) { super(page) }

    // Действия
    async click(): Promise<void> {
        const page = await this.initPage()
        await page.locator(this.locator).click()
    }

    async fill(text: string): Promise<void> {
        const page = await this.initPage()
        await page.locator(this.locator).fill(text)
    }

    //
    async getCollection() {
        const page = await this.initPage()
        return await page.locator(this.locator).all()
    }

    // Проверки
    async toBeVisible(): Promise<void> {
        const page = await this.initPage()
        await expect(page.locator(this.locator)).toBeVisible()
    }

    async toBeHidden(): Promise<void> {
        const page = await this.initPage()
        await expect(page.locator(this.locator)).toBeHidden()
    }

    async toBeEnabled(): Promise<void> {
        const page = await this.initPage()
        await expect(page.locator(this.locator)).toBeEnabled()
    }

    async toBeDisabled(): Promise<void> {
        const page = await this.initPage()
        await expect(page.locator(this.locator)).toBeDisabled()
    }
}

class Element extends BaseElement {
    constructor(readonly locator: string, readonly page: Page) { super(locator, page) }
}

class Link extends BaseElement {
    constructor(readonly text: string, readonly page: Page) { super(
        `//a[text()='${text}'] | //a[@aria-label='${text}'] | //a[@id='${text}']`,
        page)
    }
}
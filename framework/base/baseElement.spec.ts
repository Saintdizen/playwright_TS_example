import {baseBrowser} from "./baseBrowser.spec";
import {expect} from "@playwright/test";

export class BaseElement {
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
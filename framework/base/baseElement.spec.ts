import {baseBrowser} from "./baseBrowser.spec";
import {expect, Locator} from "@playwright/test";

export class BaseElement {
    constructor(readonly xpath: string) { }

    private async init() {
        const page = await baseBrowser.initTab()
        const element = page.locator(this.xpath)
        if (await element.count() > 1) {
            return element
        } else {
            await element.waitFor()
            return element
        }
    }

    // Действия
    async click(): Promise<void> {
        const element = await this.init()
        await element.click()
    }

    async fill(text: string): Promise<void> {
        const element = await this.init()
        await element.fill(text)
    }

    //
    async getCollection() {
        const element = await this.init()
        return await element.all()
    }

    // Ожидания
    async waitVisible(): Promise<Locator> {
        const element = await this.init()
        await element.waitFor({ state: "visible" })
        return element
    }

    async waitNotVisible(): Promise<void> {
        const element = await this.init()
        await element.waitFor({ state: "hidden" })
    }

    // Проверки
    async toBeVisible(): Promise<void> {
        const element = await this.init()
        await expect(element).toBeVisible()
    }

    async toBeHidden(): Promise<void> {
        const element = await this.init()
        await expect(element).toBeHidden()
    }

    async toBeEnabled(): Promise<void> {
        const element = await this.init()
        await expect(element).toBeEnabled()
    }

    async toBeDisabled(): Promise<void> {
        const element = await this.init()
        await expect(element).toBeDisabled()
    }
}
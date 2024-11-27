import {expect, Page} from "@playwright/test";
import {BaseBrowser, baseBrowser} from "./baseBrowser.spec";

export class BasePage {
    browser: BaseBrowser = baseBrowser
    constructor(readonly page: Page) { baseBrowser.setPage(page); }

    async textContainsPage(texts: string[]): Promise<void> {
        const page = await baseBrowser.initTab()
        for (let text of texts) {
            const element = page.getByText(text, {exact: true})
            await expect(element).toBeVisible();
        }
    }
}
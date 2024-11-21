import { BasePage } from "../framework/base.spec";
import {Page} from "@playwright/test";

export class ExamplePage extends BasePage {
    constructor(readonly page: Page) { super(page); }
    readonly url: string = "https://playwright.dev/"
    readonly link = this.element('//*[@aria-label="Star microsoft/playwright on GitHub"]')
    readonly check = this.element('//*[text()="playwright"]')
    readonly check2 = this.element('//*[@id="security-tab"]')
    readonly check3 = this.element('//*[text()="Reporting Security Issues"]')

    async open() {
        await super.open(this.url);
    }
}
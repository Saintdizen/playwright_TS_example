import { BasePage } from "../framework/base.spec";
import {Page} from "@playwright/test";

export class ExamplePage extends BasePage {
    constructor(readonly page: Page) { super(page); }
    readonly url: string = "https://playwright.dev/"
    readonly link1 = this.a('GitHub repository')
    readonly link2 = this.a("Star microsoft/playwright on GitHub")
    readonly check = this.element('//*[text()="playwright"]')
    readonly check2 = this.element('//*[@id="security-tab"]')
    readonly check3 = this.element('//*[text()="Reporting Security Issues"]')
    readonly links = this.element('//a')

    async exampleFunction() {
        await this.link1.click()
        await this.check.toBeVisible()
        await this.check2.click()
        await this.check3.toBeVisible()
        await this.closePage()
    }
}
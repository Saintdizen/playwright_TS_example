import {Link, Element, BasePage} from "../framework/base.spec";
import {Page} from "@playwright/test";

export class ExamplePage extends BasePage {
    constructor(readonly page: Page) { super(page); }

    readonly url: string = "https://playwright.dev/"
    readonly link1 = new Link('GitHub repository')
    readonly link2 = new Link("Star microsoft/playwright on GitHub")
    readonly check = new Element('//*[text()="playwright"]')
    readonly check2 = new Element('//*[@id="security-tab"]')
    readonly check3 = new Element('//*[text()="Reporting Security Issues"]')
    readonly links = new Element('//a')

    async exampleFunction() {
        await this.link1.click()
        await this.check.toBeVisible()
        await this.check2.click()
        await this.check3.toBeVisible()
        await this.browser().closeTab()
    }
}
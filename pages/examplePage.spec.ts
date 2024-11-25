import { BasePage } from "../framework/base.spec";
import {Page} from "@playwright/test";

export class ExamplePage extends BasePage {
    constructor(readonly page: Page) { super(page); }
    readonly url: string = "https://playwright.dev/"
    readonly link1 = super.a('GitHub repository')
    readonly link2 = super.a("Star microsoft/playwright on GitHub")
    readonly check = super.element('//*[text()="playwright"]')
    readonly check2 = super.element('//*[@id="security-tab"]')
    readonly check3 = super.element('//*[text()="Reporting Security Issues"]')
    readonly links = super.element('//a')


    async open() {
        await super.open(this.url);
    }

    async closePage() {
        await super.closePage()
    }
}
import {Element} from "../framework/elements.spec";
import {Page} from "@playwright/test";

export class ExamplePage {
    constructor(private page: Page) {}
    public url: string = "https://playwright.dev/"
    public link: Element = new Element('//*[@aria-label="Star microsoft/playwright on GitHub"]')
    public check: Element = new Element("//a[text()='playwright']")

    async open() {
        await this.page.goto(this.url)
    }
}
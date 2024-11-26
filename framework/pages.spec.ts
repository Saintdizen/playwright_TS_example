import {Page} from "@playwright/test";
import {ExamplePage} from "../pages/examplePage.spec";

export class Pages {
    constructor(private page: Page) { }
    examplePage: ExamplePage = new ExamplePage(this.page)
}
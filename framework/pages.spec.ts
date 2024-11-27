import {Page} from "@playwright/test";
import {ExamplePage} from "../pages/examplePage.spec";
import {ExampleTwoPage} from "../pages/example2Page.spec";

export class Pages {
    constructor(readonly page: Page) {}
    examplePage: ExamplePage = new ExamplePage(this.page);
    exampleTwoPage: ExampleTwoPage = new ExampleTwoPage(this.page)
}
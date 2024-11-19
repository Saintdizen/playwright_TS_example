import {Page} from "@playwright/test";

declare global {
    namespace NodeJS {
        interface Global {
            PAGE: Page;
        }
    }
}
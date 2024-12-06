import {expect, test} from "@playwright/test";
import assert = require("node:assert");

test.describe('example', () => {

    // test.beforeEach(async ({ page }) => { /**/ });

    test('example', async ({page}) => {
        await page.goto("")
        const h1 = page.locator('')
        const statusVisible = await h1.isVisible()
        //assert(statusVisible === true, "Элемент не отображается")
        expect(statusVisible).toEqual(true)
    });
});
import {Page, test as base} from '@playwright/test';

export const test = base.extend<{ waitPage: void }>({
    waitPage: [async ({page}, use) => {
        global.PAGE = page
        await use();
    }, { auto: true }],
});
export { expect } from '@playwright/test';
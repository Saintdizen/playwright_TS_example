import { test as base } from '@playwright/test';
import {Pages} from "./pages.spec";

type AllPages = {
    pages: Pages
};

export const test = base.extend<AllPages>({
    pages: async ({page}, use) => await use(new Pages(page))
});

export { expect } from '@playwright/test';
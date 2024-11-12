import { test, expect } from '@playwright/test';
import { allure } from "allure-playwright";

import { PlaywrightDevPage } from './page_object_spec';

test('get started link', async ({ page }) => {
  await allure.description("Описание или сценарий");
  //
  const playwrightDev = new PlaywrightDevPage(page);
  //
  await allure.step("Шаг 1", async () => {
    await playwrightDev.goto();
  });

  await allure.step("Шаг 2", async () => {
    await playwrightDev.getStarted();
  });

  await allure.step("Шаг 3", async () => {
    await expect(playwrightDev.tocList).toHaveText([
      `How to install Playwright`,
      `What's Installed`,
      `How to run the example test`,
      `How to open the HTML test report`,
      `Write tests using web first assertions, page fixtures and locators`,
      `Run single test, multiple tests, headed mode`,
      `Generate tests with Codegen`,
      `See a trace of your tests`
    ]);
  });

});

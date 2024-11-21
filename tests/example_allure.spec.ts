import { test } from '@playwright/test';
import { allure } from "allure-playwright";
import {ExamplePage} from "./page";

test('Тест 1 Получние стартовой ссылки', async ({ page }) => {
  await allure.description("Описание или сценарий");
  //
  const examplePage = new ExamplePage(page);
  //
  await allure.step("Шаг 1 Переход на страницу", async () => {
    await examplePage.open();
  });

  await allure.step("Шаг 2 Проверка отображение ссылки 'getStarted'", async () => {
    await examplePage.link.click();
  });

  await allure.step("Шаг 3 Проверка наличия текста", async () => {
    await examplePage.check.toBeVisible();
  });

});

[Установка playwright](https://www.npmjs.com/package/playwright) | [Документация](https://playwright.dev/docs/intro)

## Создание проекта:
### Запустить из вашего проекта в корневой папке:
`npm init playwright@latest`
### Или создать новый проект:
`npm init playwright@latest new-project`

## Установка дополнительный зависимостей:
`sudo npx playwright install-deps`

## Запуск тестов:
`npx playwright test --debug`

`npx playwright test example.spec.ts --debug`

`npx playwright test example_allure.spec.ts --debug`
## Открыть последний отчет:
`npx playwright show-report`

### Установка Allure [Документация](https://www.npmjs.com/package/allure-playwright)
`npm install -D allure-playwright`
### Добавление allure-playwright как основной отчет в playwright.config.ts:
```typescript
{ 
    // ...
    reporter: "allure-playwright"
    // ...
}
```
### Генерация отчета:
`allure serve ./allure-results`
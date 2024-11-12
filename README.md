[Установка playwright](https://www.npmjs.com/package/playwright) | [Документация](https://playwright.dev/docs/intro)

# Создание проекта:
## Запустить из вашего проекта в корневой папке:
`npm init playwright@latest`
## Или создать новый проект:
`npm init playwright@latest new-project`

# Установка дополнительный зависимостей:
`sudo npx playwright install-deps`

# Запуск тестов:
`npx playwright test --debug`

`npx playwright test example.spec.ts --debug`
# Открыть последний отчет:
`npx playwright show-report`
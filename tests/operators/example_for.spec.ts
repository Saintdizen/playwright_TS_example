//https://playwright.dev/docs/locators

import { test } from '@playwright/test';

test('while', async () => {
    let i = 0;
    console.log("Задаю условие в цикле, где i меньше 9")
    console.log("Для выхода из цикла необходимо, чтобы условие i < 9 (", i < 9 ,") вернуло false (Ложь)")
    while (i < 9) {
        console.log(i++, "Прибавляю 1")
        if (i < 9) {
            console.log("Условие i < 9 выполнено? Да! i (", i, ") меньше 9 пошел еще на круг")
        } else {
            console.log("Условие i < 9 выполнено? Нет! i (", i, ") равно 9 выхожу из цикла")
        }
    }
    console.log("Конец цикла")
});

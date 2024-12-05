import {test} from "../framework/fixtures.spec";
import {join, resolve} from "path"

test.describe('examplePath', () => {

    // test.beforeEach(async ({ page }) => { /**/ });

    test('examplePath', async () => {
        // ПУть до файла
        const absolutePathToFile = join(resolve("./"), "files", "file.pdf");
        console.log(absolutePathToFile) // /home/syzoth/WebstormProjects/playwright_TS_example/tests/file.pdf

        // Путь до папки с тестами
        const pathToFolder = resolve(__dirname)
        console.log(pathToFolder) // /home/syzoth/WebstormProjects/playwright_TS_example/tests

        // Путь до корневой папки проекта
        const pathToProjectRoot = resolve("./")
        console.log(pathToProjectRoot) // /home/syzoth/WebstormProjects/playwright_TS_example
    });
});
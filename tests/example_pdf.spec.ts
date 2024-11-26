import {PdfReader} from "pdfreader";
import {expect, test} from "../framework/fixtures.spec";
import {join, resolve} from "path"

test.describe('examplePDF', () => {

    // test.beforeEach(async ({ page }) => { /**/ });

    test('examplePDF', async () => {
        // ПУть до файла
        let absolutePathToFile = join(resolve("./"), "files", "file.pdf");
        console.log(absolutePathToFile) // /home/syzoth/WebstormProjects/playwright_TS_example/tests/file.pdf

        // Путь до папки с тестами
        let pathToFolder = resolve(__dirname)
        console.log(pathToFolder) // /home/syzoth/WebstormProjects/playwright_TS_example/tests

        // Путь до корневой папки проекта
        let pathToProjectRoot = resolve("./")
        console.log(pathToProjectRoot) // /home/syzoth/WebstormProjects/playwright_TS_example

        // https://www.npmjs.com/package/pdfreader
        // https://github.com/adrienjoly/npm-pdfreader-example
        new PdfReader().parseFileItems(absolutePathToFile, (err, item) => {
            if (err) {
                console.error("error:", err);
            }
            else if (!item) {
                console.warn("end of file");
            }
            else if (item.text) {
                // Читаем документ
                console.log(item.text);
            }
        });
    });
});
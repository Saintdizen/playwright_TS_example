import {PdfReader} from "pdfreader";
import {test} from "../framework/fixtures.spec";
import {join, resolve} from "path"

test.describe('examplePDF', () => {

    // test.beforeEach(async ({ page }) => { /**/ });

    test('examplePDF', async () => {
        const absolutePathToFile = join(resolve("./"), "files", "file.pdf");

        // https://www.npmjs.com/package/pdfreader
        // https://github.com/adrienjoly/npm-pdfreader-example
        new PdfReader().parseFileItems(absolutePathToFile, (err, item) => {
            // Ошибка при чтении файла
            if (err) {
                console.error("Ошибка:", err);
            }
            // Конец файла
            else if (!item) {
                console.warn("Конец файла");
            }
            // Читаем документ
            else if (item.text) {
                console.log(item.text);
            }
        });
    });
});
import {test} from "../framework/fixtures.spec";
import axios from 'axios';

test.describe('exampleAPI', () => {

    // test.beforeEach(async ({ page }) => { /**/ });

    test('exampleAPI', async () => {
        // https://www.npmjs.com/package/axios

        // Можно так
        const responseGet = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        console.log(responseGet.data)

        const responsePost = await axios.post('Апи в которую можно что-то послать у меня нет(', "Какая-то DATA");
        console.log(responsePost.data)

        // Или так
        try {
            const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
            console.log(response.data)
            // Проверки
        } catch (error) {
            console.error(error);
        }
    });
});
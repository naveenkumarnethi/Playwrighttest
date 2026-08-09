import {test} from '../pages/Customtestlogin';

test('validate clicking on PIM module', async ({ loggedinpage }) => {
    await loggedinpage.getByText('PIM').click();

});

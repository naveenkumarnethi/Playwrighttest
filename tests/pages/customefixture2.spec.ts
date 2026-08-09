import {test} from '../pages/Customtestlogin';

test('validate clicking on time', async ({ loggedinpage }) => {
    await loggedinpage.getByRole('link', { name: 'Time' }).click();

});
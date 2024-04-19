import Login from '../pageobjects/Loging.in.js';

describe('test', () => {
    it('vaildLogin', async () => {
        await Login.open();
        await Login.logInLogOut();
        await Login.negitiveTest();
    });
})
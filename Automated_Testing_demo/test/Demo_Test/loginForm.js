describe('Login Form-API command', function(){

    it('Login Form', async() => {
        // Open Page
        browser.url('https://the-internet.herokuapp.com/login')

        // wait usename, password, login button visible
        //1. get input user
        const inputUser = await browser.$('#username');
        //2. wait for visible
        await inputUser.waitForDisplayed({ timeout: 10000 });
        //3. set Value cho input user
        await inputUser.setValue('Pham Van Duy');

        //4. get input password
        const inputPassword =  await browser.$('#password');
        //5. wait for visible
        await inputPassword.waitForDisplayed({timeout: 10000});
        //6.set Value input password
        await inputPassword.setValue('123456789');

        //7. get button submit
        const button = await browser.$('[type="submit"]');
        //8. wait for visible
        await button.waitForDisplayed({timeout: 10000});
        //9. click on button
        await button.click();

        //10. wait to see
        await browser.pause(3000)

    })
})
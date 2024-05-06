describe('API Command', function(){

    const JS_Alert = '[onclick = "jsConfirm()"]';
    const form = '#login';
    it('get data on attribute', async () => {
        //Open page
        await browser.url('https://the-internet.herokuapp.com/login');
        await browser.$(form).waitForDisplayed({timeout: 30000});

        //Get text
        let atbute = await browser.$(form).getAttribute('method')
        console.log('get data when click on it: ', atbute);
    })

    it('get data on element size', async () => {
        const element = await browser.$(form);
        const sizeElement = await element.getSize();
        console.log('size of element', sizeElement);
    })
})
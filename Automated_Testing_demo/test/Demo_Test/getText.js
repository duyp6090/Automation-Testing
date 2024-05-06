describe('API Command', function(){

    const JS_Alert = '[onclick = "jsConfirm()"]';
    const Reuslt = '#result';
    it('get data on confirm', async () => {
        //Open page
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        await browser.$(JS_Alert).waitForDisplayed({timeout: 30000});

        //Click on alert
        await browser.$(JS_Alert).click();
        await browser.acceptAlert();
        await browser.pause(3000);

        //Get text
        await browser.$(Reuslt).waitForDisplayed({timeout: 30000});
        let textdata = await browser.$(Reuslt).getText();
        console.log('get data when click on it: ', textdata);
    })

    it('get data on prompt', async () => {

    })
})
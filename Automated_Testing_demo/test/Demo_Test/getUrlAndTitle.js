describe('API Command', function(){

    const JS_Alert = '[onclick = "jsConfirm()"]';
    const form = '#login';
    it('get data on url and urrl', async () => {
        //Open page
        await browser.url('https://webdriver.io');

        //Get page url
        let pageURL = await browser.getUrl();

        //Get page title
        let pageTitle = await browser.getTitle();

        console.log('in ra lna luot ket qua', pageURL, pageTitle);
    })

})
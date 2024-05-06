
describe('API Command', function(){
    const pageNew = '#__docusaurus_skipToContent_fallback > header > div > div.buttons_pzbO > a:nth-child(3)'
    it('tab Handling', async () => {
        //Open page
        await browser.url('https://webdriver.io');
        await browser.$(pageNew).waitForDisplayed({timeout: 30000});
        await $(pageNew).click();
        
        //Get all page in link
        let arrTab = await browser.getWindowHandles();
        console.log(arrTab);

        //Get title page
        let pageTitle = await browser.getTitle();
        console.log('name page current', pageTitle);

        //Switch page
        await browser.switchToWindow(arrTab[1]);
        await browser.pause(3000);
        //Get page title new
        pageTitle = await browser.getTitle();
        console.log(' new name page current', pageTitle);
    });

})

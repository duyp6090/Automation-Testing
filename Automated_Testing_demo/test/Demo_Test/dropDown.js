describe('drop Down -API Cammand',  () => {

    //1. lay ra phan thu 
    const dropDownWeb = '#dropdown';
    it('drop Down web selectbyindex', async () => {
        //. open page 
        browser.url('https://the-internet.herokuapp.com/dropdown');
        // wait display
        await browser.$(dropDownWeb).waitForDisplayed({timeout: 10000});
        //2. select option by index
        await browser.$(dropDownWeb).selectByIndex(1);
        // pause to see
        await browser.pause(3000);
    })

    it('drop Down web selectbyvisibleText', async () => {
        // wait display
        await browser.$(dropDownWeb).waitForDisplayed({timeout: 10000});
        //3. select option by visible
        browser.$(dropDownWeb).selectByVisibleText('Option 2');
        // pause to see
        await browser.pause(3000);
    })

    it('drop Down web selectbyattribute' , async () => {
        // wait display
         await browser.$(dropDownWeb).waitForDisplayed({timeout: 10000});
        //3. select option by visible
        browser.$(dropDownWeb).selectByAttribute('value', '1');
        // pause to see
        await browser.pause(3000);
    })
})
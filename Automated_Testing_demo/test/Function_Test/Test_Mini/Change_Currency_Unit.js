const changeCurrencyUnit =  require('../Module_Prepare/changeCurrencyUnit.js');

describe('Change Curency Unit', function(){

    let pageUrl = "https://academybugs.com/find-bugs/#";
    
    before("Open Page", async function(){
        await browser.url(pageUrl);
        await browser.pause(3000);
    });

    after('After Text', async function(){
        await browser.pause(5000);
    })

    it('ClickTo Choice Unit', async () => {

        // click add item
        await changeCurrencyUnit.clickButtonAdd();

        //click to access shopping cart
        await changeCurrencyUnit.clickButtonAdded();

        // change currency unit
        await changeCurrencyUnit.changeCurrency();

        // close testcase information bug
        await changeCurrencyUnit.clickCloseButton();

    })
})
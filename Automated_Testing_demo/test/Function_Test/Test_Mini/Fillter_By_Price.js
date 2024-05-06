let fillterItem = require('../Module_Prepare/fillerItem.js');

describe('Fill Price', function(){

    let pageUrl = "https://academybugs.com/find-bugs/#";
    
    before("Open Page", async function(){
        await browser.url(pageUrl);
        await browser.pause(3000);
    });

    after('After Text', async function(){
        await browser.pause(5000);
    })

    it('Test Filler Of Price', async () => {
        // click choice Item
        await fillterItem.clickChoiceItem();

        // scrollItem to see table price
        await fillterItem.scrollViewTablePrice();

        // click to choice price
        await fillterItem.clickFillPriceItem();
        
        // close testcase
        await fillterItem.clickCloseButton();   
    })
})
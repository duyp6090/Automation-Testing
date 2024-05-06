let detailManufacturerItem = require('../Module_Prepare/detailInforOfItem.js');

describe('Check Manufacturer', function(){

    let pageUrl = "https://academybugs.com/find-bugs/#";
    
    before("Open Page", async function(){
        await browser.url(pageUrl);
        await browser.pause(3000);
    });

    after('After Text', async function(){
        await browser.pause(5000);
    })

    it('Change To Manufacturer Page', async () => {
        // click choice Item
        await detailManufacturerItem.clickChoiceItem();

        // scrollItem to see table price
        await detailManufacturerItem.clickToManufucturer(pageUrl);

        // close testcase
        await detailManufacturerItem.clickCloseButton();    
    })
})
let changeDirectionItem = require('../Module_Prepare/changeDirectionItem.js');

describe('Change Direct Link Information Page', function(){
    
    let pageUrl = "https://academybugs.com/find-bugs/#";
    
    before("Open Page", async function(){
        await browser.url(pageUrl);
        await browser.pause(3000);
    });

    after('Ater Text', async function(){
        await browser.pause(5000);
    })

    it('Click To Change Page', async () => {

        // click open item
        await changeDirectionItem.clickChoiceItem();

        //  change direction of item
        await changeDirectionItem.changeDirection();

    })
})
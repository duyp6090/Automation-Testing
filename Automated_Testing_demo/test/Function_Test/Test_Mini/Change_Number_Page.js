let changeNumberPage = require('../Module_Prepare/changeNumberPage.js');

describe('Change Number Page', () => {
    let pageUrl = "https://academybugs.com/find-bugs/#";
    
    before("Open Page", async function(){
        await browser.url(pageUrl);
        await browser.pause(3000);
    });

    after('After Text', async function(){
        await browser.pause(5000);
    })

    it('Change Number Page', async () => {

        // click to change page
        await changeNumberPage.changePage();

        // close testcase
        await changeNumberPage.clickCloseButton();
    })
})
//let dataSource = require('../Data_Source/');
let updateQuantityItem = require('../Module_Prepare/addCart.js')


describe('Change Quantity Item', function(){

    let pageUrl = "https://academybugs.com/find-bugs/#";
    
    before("Open Page", async function(){
        await browser.url(pageUrl);
        await browser.pause(4000);
    });

    after("After Text", async function() {
        await browser.pause(5000)
    });

    it('Change Quantity', async () => {

        // click add item
        await updateQuantityItem.clickButtonAdd();

        //click to change shopping cart
        await updateQuantityItem.clickButtonAdded();

        // click change quantity of item
        await updateQuantityItem.changeQuantity();

        // click update to detect bug
        await updateQuantityItem.updateItems();

        // close testcase detect bug
        await updateQuantityItem.clickCloseButton();
    })
})
let dataSource = require('../Data_Source/dataSource.json');
let closeButton = require('./BaseJs/closeButton.js');

const buttonAddCart = dataSource.buttonAddCart;
const buttonAddedCart = dataSource.buttonAddedCart;
const idIteamCart = '[type="number"]';
const updateChange = '.ec_cartitem_update_button';


class updateQuantityItem extends closeButton{

    // function to click add
    async clickButtonAdd() {
        await $(buttonAddCart).click();
        await browser.pause(4000)
    }

    // function to click added
    async clickButtonAdded() {
        // get url current
        const currentUrl = await browser.getUrl();

        await $(buttonAddedCart).click();
        await browser.pause(4000)
    }

    // function to change value of item
    async changeQuantity() {
        await $(idIteamCart).setValue(50);
        await browser.pause(3000)
    }

    // fucntion to update items
    async updateItems() {
        await $(updateChange).click();
        await browser.pause(5000)
    }

}

module.exports = new updateQuantityItem();
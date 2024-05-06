let dataSource = require('../Data_Source/dataSource.json');
let closeButton = require('./BaseJs/closeButton.js');

const buttonAddCart = dataSource.buttonAddCart;
const buttonAddedCart = dataSource.buttonAddedCart;
const currencyUnit = '//*[@id="ec_currency_conversion"]';
const newCurrencyUnit = '//*[@id="ec_currency_conversion"]/option[2]';


class changeCurrencyUnit extends closeButton{

    // function to click add
    async clickButtonAdd() {
        await $(buttonAddCart).click();
        await browser.pause(4000);
    }

    // function to click added
    async clickButtonAdded() {
        await $(buttonAddedCart).click();
    }

    // function to change currency unit
    async changeCurrency() {

        // choice options currency unit
        await $(currencyUnit).click();
        
        // choice EUR currency unit
        await $(newCurrencyUnit).click();

    }

}

module.exports = new changeCurrencyUnit();
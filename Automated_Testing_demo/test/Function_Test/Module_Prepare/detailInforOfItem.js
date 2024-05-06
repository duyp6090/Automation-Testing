let dataSource = require('../Data_Source/dataSource.json');
let closeButton = require('./BaseJs/closeButton.js');

const inforOfItem = '#ec_product_image_effect_4481370';
const detailInforItem = '//*[@id="manufacturer-bug"]/a';


class checkmanufacturerLink extends closeButton {

    // choice Item to see infromation
    async clickChoiceItem() {
        await $(inforOfItem).click();
        await browser.pause(3000);
    }

    // redirect to manufacturer by link
    async clickToManufucturer(pageUrl) {
        await $(detailInforItem).click();
        await browser.pause(3000);

        // back previous page
        await browser.navigateTo(pageUrl);
    }

}

module.exports = new checkmanufacturerLink()
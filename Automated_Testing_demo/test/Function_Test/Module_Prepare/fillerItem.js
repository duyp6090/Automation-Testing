let dataSource = require('../Data_Source/dataSource.json');
let closeButton = require('./BaseJs/closeButton.js');

const inforOfItem = '#ec_product_image_effect_4881370'
const tablePrice = '.ec_pricepoint_widget'
const choicePrice = '//*[@id="secondary"]/div[6]/div[1]/a'


class fillerItemByPrices extends closeButton{

    // choice Item to see infromation
    async clickChoiceItem() {
        await $(inforOfItem).click();
        await browser.pause(3000);
    }

    async scrollViewTablePrice() {
        await $(tablePrice).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        await browser.pause(3000);   
    }

    async clickFillPriceItem(){
        await $(choicePrice).click()
        await browser.pause(5000);   
    }


}

module.exports =  new fillerItemByPrices()
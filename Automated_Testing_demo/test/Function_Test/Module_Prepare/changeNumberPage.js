let closeButton = require('./BaseJs/closeButton.js');

const numberPage = '//*[@id="ec_product_page"]/div[1]/span[1]/a[3]'

class changeNumberPage extends closeButton{

    // funcion to change page
    async changePage() {
        
        // Click on the number page
        await $(numberPage).waitForDisplayed({ timeout: 3000 });
        await $(numberPage).click();
    }
}

module.exports = new changeNumberPage();


let dataSource = require('../../Data_Source/dataSource.json');

const buttonCloseDetail = dataSource.buttonCloseDetail;
const buttonCloseNotice = dataSource.buttonCloseNotice;

class closeButton {
    
    async clickCloseButton() {

        // wait for the button detail to load
        await $(buttonCloseDetail).waitForDisplayed({timeout: 10000});

        // wait to see the result
        await browser.pause(3000);

        // close detail
        await $(buttonCloseDetail).click();

        // wait for the button notice to load
        await $(buttonCloseNotice).waitForClickable({timeout: 10000});
        
        // close notice
        await $(buttonCloseNotice).click();
    }
}

module.exports = closeButton;
let dataSource = require('../Data_Source/dataSource.json');
let closeButton = require('./BaseJs/closeButton.js');

const buttonCloseDetail = dataSource.buttonCloseDetail;
const buttonCloseNotice = dataSource.buttonCloseNotice;
const containerSocialMedia = '.ec_details_social'
const listSocialMedia = '.ec_details_social_icon';
const inforOfItem = '#ec_product_image_effect_4481370';


class changeDirectionItem extends closeButton{
    
    // choice Item to see infromation
    async clickChoiceItem() {
        await $(inforOfItem).click();
        await browser.pause(3000);
    }

    // Change direction of item
    async changeDirection() {

        const socialMediaElements = await $$(listSocialMedia);
        const navigateBrowser = await browser.getUrl();

        // loop through each social media element
        for (let i = 0; i < socialMediaElements.length; i++) {
            const socialMedia = socialMediaElements[i];
    
            // wait until the element is clickable
            await socialMedia.waitForClickable();

               // change direction of item
            await socialMedia.click();

            // wait for the page to load
            await browser.waitUntil(
                async () => (await browser.getUrl()) !== 'about:blank',
                {
                    timeout: 5000,
                    timeoutMsg: 'expected page to load within 5s',
                }
            );
            
            // wait to see new page
            await browser.pause(3000);

            // back to navigation item
            if(i < socialMediaElements.length -1) {

                // back previous page
                await browser.navigateTo(navigateBrowser);

                // close notice
                try {
                    
                    // call function to close button
                    await this.clickCloseButton();

                } 
                
                catch (error) {
                    console.log([error], error);
                }
            }
        }
    }


}

module.exports = new changeDirectionItem();


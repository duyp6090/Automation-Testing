let dataSource = require('../Data_Source/dataSource.json');

const inputUser = '//*[@id="ec_account_login_email"]';
const inputPass = '//*[@id="ec_account_login_password"]';
const buttonLogin = '//*[@id="ec_account_register"]/div[2]/form/div[5]/input'; 

class loginPage {

    async inputUser(username) {
        await $(inputUser).setValue(username); // input user
        await browser.pause(3000);
    }

    async inputPass(passsword) {
        await $(inputPass).setValue(passsword); // input pass
        await browser.pause(3000);
    }

    async clickLogin() {
        await $(buttonLogin).click(); // click login
        await browser.pause(3000);
    }

}

module.exports = new loginPage()
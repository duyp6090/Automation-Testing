const Base = require("./base.js");
const SecureAreaPage = require("./secureAreaPage.js");


const USERNAME_TXTBX = '#username';
const PASSWORD_TXBX = '#password';
const LOGIN_BTN = '[type="submit"]';
const Login_Title = "h2"

class LoginPage extends Base {

    // async verifyLoginTitle() {
    //     let actualLoginPageTitle = await this.getTitle();
    //     let expectedLoginPageTitle = "Login Page";
    //     expect(actualLoginPageTitle).to.equal(expectedLoginPageTitle, "ERR: Login Title is incorrect");
    // }
    async getTitle() {
        const content = await $(Login_Title).getText()
        return content
    }

    async inputUsername(username) {
       await $(USERNAME_TXTBX).setValue(username);
       return this;
    }

    async inputPassword(password) {
        await $(PASSWORD_TXBX).setValue(password);
        return this;
    }

    async clickOnLoginBtn() {
       await $(LOGIN_BTN).click();
       return this; // Trả về thể hiện của lớp LoginPage thay vì SecureAreaPage
    }

}

module.exports = LoginPage;

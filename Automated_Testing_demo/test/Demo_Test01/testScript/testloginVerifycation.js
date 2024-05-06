const LoginPage = require("../loginPage.js");
const loginData = require("../Test_Data/testLogin.json");


describe('API Command', function() {
    let pageUrl = "https://foft4k.me";
    
    before("Refresh Page", async function(){
        await browser.url(pageUrl);
        await browser.pause(3000);
    });

    afterEach("after Text", async function() {
        await browser.refresh();
    });

    it('loginForm with incorrect', async () => {
        const loginPageInstance = new LoginPage();
        let actualLoginPageTitle = await loginPageInstance.getTitle()
        let expectedLoginPageTitle = "Login Page";
        chai.expect(actualLoginPageTitle).to.equal(expectedLoginPageTitle, "ERR: Login Title is incorrect");
    });

    it("Login", async () => {
        const loginPageInstance = new LoginPage();
        await loginPageInstance.inputUsername(loginData.correctCredentials.username);
        await loginPageInstance.inputPassword(loginData.correctCredentials.password);
        await loginPageInstance.clickOnLoginBtn();
    })
});
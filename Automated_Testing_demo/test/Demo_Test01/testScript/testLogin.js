const loginPage = require("../loginPage.js");
const loginData = require("../Test_Data/testLogin.json")

let pageUrl = "https://the-internet.herokuapp.com/login"

describe('API Command', function(){

    before("Refresh Page", async function(){
        await browser.url(pageUrl)
        await browser.pause(3000);
    })

    afterEach("after Text", async function(){
        await browser.refresh()
    })

    after("Clean up", async function(){
        // Make sure to close the browser session after all tests finish
        await browser.deleteSession();
    });

    it('loginForm with incorrect', async () => {
        const loginPageInstance = new loginPage()
        await loginPageInstance
            .inputUsername(loginData.incorrectCredentials.username)
            .then(() => loginPageInstance.inputPassword(loginData.incorrectCredentials.password))
            .then(() => loginPageInstance.clickOnLoginBtn())

        await browser.pause(5000); // This pause might not be necessary, consider using waits or assertions instead
    })

    it('loginForm with correct', async () => {
        const loginPageInstance = new loginPage()
        await loginPageInstance
            .inputUsername(loginData.correctCredentials.username)
            .then(() => loginPageInstance.inputPassword(loginData.correctCredentials.password))
            .then(() => loginPageInstance.clickOnLoginBtn())

        await browser.pause(5000); // This pause might not be necessary, consider using waits or assertions instead
    })

})
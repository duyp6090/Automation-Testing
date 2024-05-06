const loginPage = require('../Module_Prepare/loginPage.js');
const dataEmail = require('../Data_Source/dataSource.json');

describe('Login Page', () => {

    let pageUrl = "https://academybugs.com/account/?ec_page=register";
    let acountEmail = dataEmail.arrayPerson[0].account;
    let acountPass = dataEmail.arrayPerson[0].password;

    before("Open page", async function(){
        await browser.url(pageUrl);
        await browser.pause(3000);
    });

    after('Wait to see result', async function(){
        await browser.pause(5000);
    })

    it('Login Page', async () => {

        // input email 
        await loginPage.inputUser(acountEmail);

        // input passsword
        await loginPage.inputPass(acountPass);

        // submit login
        await loginPage.clickLogin();

        // back previous page
        await browser.pause(5000);
        await browser.back();
    });

    it('Login Page Error Password', async () => {

        //  change wrong password
         acountPass = '123456';
        
        // input email 
        await loginPage.inputUser(acountEmail);

        // input passsword
        await loginPage.inputPass(acountPass);

        // submit login
        await loginPage.clickLogin();

        // back previous page
        await browser.pause(5000);
        await browser.back();
    });

    it('Login Page Error Email', async () => {

        //  change wrong email
        acountEmail = 'duy001@gmail.com';
        
        // input email 
        await loginPage.inputUser(acountEmail);

        // input passsword
        await loginPage.inputPass(acountPass);

        // submit login
        await loginPage.clickLogin();
    });
})
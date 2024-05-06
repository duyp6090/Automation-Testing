describe('API Command', () => {

    const alertAccept = '[onclick = "jsAlert()"]'
    const alertDismiss = '[onclick = "jsConfirm()"]'
    const alertPrompt = '[onclick = "jsPrompt()"]'
    it('Alert Accept', async () => {
        await browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        await browser.$(alertAccept).waitForDisplayed({timeout: 30000});

        await browser.$(alertAccept).click();
        await browser.acceptAlert();

        await browser.pause(3000);
    })

    it('Alert Dismiss', async () => {
        await browser.$(alertDismiss).waitForDisplayed({timeout: 30000});

        await browser.$(alertDismiss).click();
        await browser.dismissAlert()

        await browser.pause(3000);
    })

    
    it('Alert Get Test', async () => {
        await browser.$(alertPrompt).waitForDisplayed({timeout: 30000});

        await browser.$(alertPrompt).click();
        await browser.sendAlertText('an com thoi doi bung vai dan')
        await browser.acceptAlert();

        await browser.pause(3000);
    })
})
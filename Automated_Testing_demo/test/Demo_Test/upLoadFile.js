
describe('API Command', function(){

    it('upload a file', async () => {
        await browser.url('https://the-internet.herokuapp.com/upload');
        await browser.$('#file-upload').waitForDisplayed({timeout: 30000});
    
        const filePath = './test/alert.js';
        const remoteFilePath = await browser.uploadFile(filePath);
    
        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();
        await browser.pause(2000);

        //Screenshot -> png
        await browser.saveScreenshot('./static_file/img/uploadScreenShot.png');
    });

})

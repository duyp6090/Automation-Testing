// './test/specs/**/*.js' 

describe('API Command', function(){
    // B1: Mở ra page gg
    it('Open page API', async () =>{
        await browser.url('https://www.google.com.vn');
        
        // Nhập dữ liệu vào ô tìm kiếm
        const textareaElement = await browser.$('textarea.gLFyf');
        await textareaElement.waitForDisplayed({ timeout: 3000 }) // Chờ 3 giây để trang tải xong
        await textareaElement.setValue('Nội dung cần tìm kiếm');
    })
})
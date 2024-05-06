
const LOGIN_CONTENT = "h2"

class secureAreaPage {
    async getSecureAreaPage() {
        let content = await $(LOGIN_CONTENT).getValue()
        return content
    }
}

module.exports = secureAreaPage
class Base {
    openPage(pageURL) {
        browser.url(pageURL);
        return this;
    }
}

module.exports = Base;

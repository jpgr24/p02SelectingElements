const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class checkboxesbpage extends Page {
    /**
     * define selectors using getter methods
     */
    get heading(){return $("h3")}
    get option1(){return $("form input:nth-child(1)")}
    get option2(){return $("form input").eq(0)}
     open() {
        return super.open('checkboxes');
    }
}

module.exports = new checkboxesbpage();
const cont = {}


// locators
cont.header = () => { return $('h3')}

cont.pTags = () => { return $$('//h3/following-sibling::p')}

cont.div

// functions
cont.goToCont = () => {
console.log('step: Looking for context menu page');

browser.url('/context_menu')

cont.header().waitForDisplayed()

console.log('step: found context menu page');
}
module.exports = cont
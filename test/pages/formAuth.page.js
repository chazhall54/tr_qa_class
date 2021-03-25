const form = {}

// Locators

form.un = () => { return $('#username')}
form.pw = () => { return $('#password')}
form.button = () => { return $('//button')}
form.flash = () => { return $('#flash')}
form.secureArea = () => { return $('//h2')}


// Functions

form.goToFormAuth = () => {
    console.log('step: looking for form auth');

    browser.url('/login')

    form.button().waitForDisplayed()

    form.secureArea().waitForDisplayed()
    console.log('step: found form auth');
}











module.exports = form;
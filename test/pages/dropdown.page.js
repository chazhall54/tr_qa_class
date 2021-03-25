const drop = {}

// locators

drop.select = () => { return $('select#dropdown')}


// functions

drop.goToDropdown = () => {
    console.log('step: Looking for dropdown page');

    browser.url('/dropdown')

    drop.select().waitForDisplayed()

    console.log('step: found dropdown page');
    
}

module.exports = drop
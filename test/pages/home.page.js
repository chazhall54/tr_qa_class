

const homePage = {}

// locators

homePage.mainHeader = () => { return $('h1') }

homePage.subHeader = () => { return $('h2') }


// functions

homePage.goToHomePage = () => {

    console.log('step: going to home page')

    browser.url('/')

    homePage.mainHeader().waitForDisplayed()

    console.log('step: on the home page')

}


module.exports = homePage;


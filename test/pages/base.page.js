

export default class basePage {

    get mainHeader() {
        return $('h1')
    }

    get subHeader() {
        return $('h2')
    }

    goToHomePage() {

        console.log('step: going to home page')

        browser.url('/')

        this.mainHeader.waitForDisplayed()

        console.log('step: on the home page')

    }

    //** Utilities */

    assert(assertion, timeout) {
        browser.waitUntil(()=>{
            return assertion;
        }, timeout)
    }


}


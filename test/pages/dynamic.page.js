const dyn = {}

// Locators

dyn.header = () => { return $('h3') }

dyn.pTags = () => { return $$('//h3/following-sibling::p') }

dyn.aTags = () => { return $$('//h3/following-sibling::a') }

dyn.startBtn = () => { return $('button=Start') }

dyn.helloWorld = () => { return $('//div[@id="finish"]/h4') }



// functions

dyn.goToDynamicLoading = () => {
    console.log('step: looking for dynamic loading page')

    browser.url('/dynamic_loading')

    dyn.header().waitForDisplayed()

    console.log('step: found loading page')

}

module.exports = dyn
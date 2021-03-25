const frames = {}


// Locators

frames.header = () => { return $('h3')}



// Functions

frames.goToFrames = () => {

    console.log('step: Looking for frames page');

    browser.url('/frames')

    frames.header().waitForDisplayed()

    console.log('step: Found frames page');


}




module.exports = frames
const downloader = {}

// locators

downloader.header = () => {return $('h3')}

downloader.aTags = () => { return $$('//h3/following-sibling::a')}

// functions

downloader.goToDownload = () => { 
    console.log('step: Looking for file downloader page');

    browser.url('/download')

    downloader.header().waitForDisplayed()

    console.log('step: found file downloader page');
}

module.exports = downloader
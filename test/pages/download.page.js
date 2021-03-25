const download = {}


// Locators

download.links = () => { return $$('a') }

// Functions

download.goToDownload = () => {
    console.log('looking for download page');

    browser.url('/download')

    download.links()[0].waitForDisplayed()

    console.log('download page found');
}

module.exports = download
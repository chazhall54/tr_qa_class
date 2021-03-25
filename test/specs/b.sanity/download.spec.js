const download = require('../../pages/download.page')

const downloadDir = './tempDownload'

const fs = require('fs')

let titles = []

describe('As a user, test the ability to download links', () => {
    before('setup', () => {

        // set download behavior
        browser.sendCommand('Page.setDownloadBehavior', { 'behavior':'allow', 'downloadPath': downloadDir})

        // mkdir download dir

        if (!fs.existsSync(downloadDir)) {
            fs.mkdirSync(downloadDir)
            
        }
        
    });

    it('Given I am on the file download page', () => {
        download.goToDownload()
    });

    it('When I click on all of the links', () => {
        download.links().forEach((link)=> {

            if (link.getText() !== 'Elemental Selenium' && !link.getHTML().includes('github')) {

                titles.push(link.getText())

                link.click()
                
            }

        })
    });

    it('Then verify that the downloads exist', () => {
        // read the dir
        files = fs.readdirSync(downloadDir)

        // assert that the lengths are equal 
        files.length.must.equal(titles.length)

        
    });

    it('And verify the titles are equal', () => {
        // loop each file
        files.forEach((file)=> {
            titles.includes(file)
        })

        // assert that the file is in the titles array 
        
    });

    after('teardown', () => {

        files.forEach((file)=> {
            fs.unlinkSync(`${downloadDir}/${file}`)
        })

        
    });
});
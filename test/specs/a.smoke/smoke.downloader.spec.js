const downloader = require('../../pages/downloader.page')

describe('As a user, Smoke test file downloader page', () => {

    it('Given I am on the file downloader page', () => {
        downloader.goToDownload()
    });

    it('Then validate header exist', () => {
        downloader.header().must.exist()
    });

    it('Then valiidate anchor tags exist', () => {
        downloader.aTags()[0].must.exist()
        downloader.aTags()[1].must.exist()
        downloader.aTags()[2].must.exist()
        downloader.aTags()[3].must.exist()
        downloader.aTags()[4].must.exist()
        downloader.aTags()[5].must.exist()
        downloader.aTags()[6].must.exist()
        downloader.aTags()[7].must.exist()
        downloader.aTags()[8].must.exist()
        downloader.aTags()[9].must.exist()
        downloader.aTags()[10].must.exist()
        downloader.aTags()[11].must.exist()
        downloader.aTags()[12].must.exist()
        downloader.aTags()[13].must.exist()
        downloader.aTags()[14].must.exist()
        downloader.aTags()[15].must.exist()
        downloader.aTags()[16].must.exist()
        downloader.aTags()[17].must.exist()
        downloader.aTags()[18].must.exist()
        downloader.aTags()[19].must.exist()
        downloader.aTags()[20].must.exist()
        downloader.aTags()[21].must.exist()
        downloader.aTags()[22].must.exist()
        downloader.aTags()[23].must.exist()
        downloader.aTags()[24].must.exist()
        downloader.aTags()[25].must.exist()
        downloader.aTags()[26].must.exist()
        downloader.aTags()[28].must.exist()
        downloader.aTags()[29].must.exist()
        downloader.aTags()[30].must.exist()
    });


});
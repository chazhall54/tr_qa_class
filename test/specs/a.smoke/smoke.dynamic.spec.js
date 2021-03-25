const dyn = require('../../pages/dynamic.page')



describe('As a User, Smoke test Dynamic loading page', () => {
    

    it('Given I am on the dynamic loading page', () => {
        dyn.goToDynamicLoading()
    });

    it('Then validate the header exist', () => {
        dyn.header().must.exist();
        
    });

    it('And validate the paragraphs exist', () => {
        dyn.pTags()[0].must.exist()
        dyn.pTags()[1].must.exist()
    });

    it('And validate the anchor tags exist', () => {
        dyn.aTags()[0].must.exist()
        dyn.aTags()[1].must.exist()
    });

    

});
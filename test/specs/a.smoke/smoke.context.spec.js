const cont = require('../../pages/context.page')


describe('u page', () => {
    
    it('Given page', () => {
        cont.goToCont()
    });

    it('Vae header exist', () => {
        cont.header().must.exist()
    });

    it('And valragraphs exist', () => {
        cont.pTags()[0].must.exist()
        cont.pTags()[1].must.exist()
    });
});


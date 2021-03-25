const frames = require('../../pages/frames.page')


describe('As a user, smoke test the frames page', () => {

    //
    it('Given I am on the frames page', () => {
        frames.goToFrames()
        
    });

    it('Then validate the header exist', () => {
        frames.header().must.exist()
        
    });
});
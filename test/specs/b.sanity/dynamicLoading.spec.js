const dyn = require('../../pages/dynamic.page')

describe('As a user, test the dynamic loading page', () => {


    it('Given I am on the dynamic loading page', () => {
        dyn.goToDynamicLoading()
    });

    // click on example one
    it('When I click on example one', () => {
        dyn.aTags()[0].waitForDisplayed()
        dyn.aTags()[0].click()
    });

    // wait for the start button then click

    it('Then click on the start button', () => {
        dyn.startBtn().waitForDisplayed()
        dyn.startBtn().click()
    });

    // assert hello world

    it('Then verify hello world exist', () => {
        dyn.helloWorld().waitForDisplayed()
        dyn.helloWorld().getText().must.equal('Hello World!')
    });
});

describe('As a user, test the dynamic loading page', () => {
    it('Given I am on the dynamic loading page', () => {
        dyn.goToDynamicLoading()

    });

    it('When I click on example 2', () => {
        dyn.aTags()[1].waitForDisplayed()
        dyn.aTags()[1].click()
        
    });

    it('Then click on Start button', () => {
        dyn.startBtn().waitForDisplayed()
        dyn.startBtn().click()
        
    });

    it('Then verify Hello World! exist', () => {
        dyn.helloWorld().waitForDisplayed()
        dyn.helloWorld().getText().must.equal('Hello World!')
        
    });
});

const homePage = require('../../pages/home.page')

describe('Smoke test the home page', () => {
    
    it('Given I go to the Home page', () => {
        homePage.goToHomePage()
    });

    it('Then validate that the page headers', () => {
        homePage.mainHeader().getText().must.equal('Welcome to the-internet')

        homePage.subHeader().getText().must.include('Available')
        
    });


});










import basePage from "../../pages/base.page";

const homePage = new basePage()

describe('Smoke test the home page', () => {
    
    it('Given I go to the Home page', () => {
        homePage.goToHomePage()
    });

    it('Then validate that the page headers', () => {
        homePage.mainHeader.getText().includes('Welcome to the-internet')
        homePage.subHeader.getText().includes('Available Examples')
    });


});
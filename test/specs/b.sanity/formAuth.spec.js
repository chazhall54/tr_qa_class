const form = require('../../pages/formAuth.page')
const creds = require('../../data/inputs')

describe('As a user, test missing un', () => {


    it('Given I am on loign page', () => {
        form.goToFormAuth()
    });

        // enter only password
    it('When I enter only pw', () => {
        form.pw().setValue(process.env.un)
        form.button().click()
        
    });    
        // assert username invalid
    it('Then verify the invalid un banner', () => {
        form.flash().waitForDisplayed()
        form.flash().getText().must.include('username is invalid')
        
    });
});

describe('As a user, test correct credentials', () => {


    it('Given I am on the login page', () => {
        form.goToFormAuth()
    });

    // enter username and pw
    it('When I enter correct un and pw', () => {
        form.pw().setValue(process.env.pw)
        form.un().setValue(process.env.un)
        form.button().click()
    });    
    // assert valid creds
    it('Then verify Secure area exist', () => {
        form.secureArea().waitForDisplayed()

        
    });

});

describe('As a user, test the wrong pw', () => {

    it('Given I am on the login page', () => {
        form.goToFormAuth()
        
    });

    it('When I enter the correct un and inncorrect pw', () => {
        form.un().setValue('tomsmith')
        form.pw().setValue('SuperSecretPassword')
        form.button().click()
        
    });

    it('Then verify invalid exist', () => {
        form.flash().waitForDisplayed()
        form.flash().getText().must.include('invalid')
        
    });
});
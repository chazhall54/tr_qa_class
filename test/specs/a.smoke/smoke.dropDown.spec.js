const drop = require('../../pages/dropdown.page')


describe('As a user, Smoke test dropdown page', () => {
    it('Given I am on the dropdown page', () => {
        drop.goToDropdown()
        
    });
    it('Then verify that no option is selected', () => {
        //first option selected
        drop.select().$$('option')[0].isSelected().must.be.true()

        //text is please select
        drop.select().$$('option')[0].getText().must.equal('Please select an option')
    });

    it('And verify all the other option are not selected', () => {
        //loop through options
        drop.select().$$('option').forEach((opt)=> {

            if (opt.getText() !== 'Please select an option') {
                opt.isSelected().must.not.be.true()
                
            }

        })

        // if the text is not please select, then option should not be selected
        
    });
});

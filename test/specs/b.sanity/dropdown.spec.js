const drop = require('../../pages/dropdown.page')



describe('As a user, test the ability to choose option 1 from the dropdown ', () => {
    it('Given I am on the dropdown page', () => {
        drop.goToDropdown()
        
    });

    it('When I choose the first option', () => {
        drop.select().selectByVisibleText('Option 1')
    });

    it('Then verify the first option is selected', () => {
        drop.select().$$('option')[1].isSelected().must.be.true()
    });

    it('And verify that the others are not', () => {
        drop.select().$$('option').forEach((opt)=> {

            if (opt.getText() !== 'Option 1') {
                opt.isSelected().must.be.false()
                
            }

        })
               
    });
        
    
});

describe('As a user, test the ability to choose option 2 from the dropdown', () => {
    it('Given I am on the dropdown page', () => {
        drop.goToDropdown()

        
    });

    it('When I select option 2', () => {
        drop.select().selectByVisibleText('Option 2')
    });

    it('Then verify option 2 is selected', () => {
        drop.select().$$('option')[2].isSelected().must.be.true()
        
    });

    it('And verify that the other options are not', () => {
        drop.select().$$('option').forEach((opt) => {

            if (opt.getText() !== 'Option 2') {
                opt.isSelected().must.be.false()
                
            }
        })
        
    });
});
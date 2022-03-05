const checkboxespage=require('../pageobjects/checkboxes.page');

describe('checkboxes', () => {
    it('Heading exists', async () => {
        await checkboxespage.open();

        
        await expect(checkboxespage.heading).toBeExisting();
        await expect(checkboxespage.option1).toBeExisting();
       // await expect(checkboxespage.option2).toBeExisting();
      /**  await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');**/
    });
     it('option 1 exists', async () => {
        await checkboxespage.open();

        
        
        await expect(checkboxespage.option1).toBeExisting();
       // await expect(checkboxespage.option2).toBeExisting();
      /**  await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');**/
    });
     it('form exists', async () => {
        await checkboxespage.open();

        
        
        await expect(checkboxespage.form).toBeExisting();
       // await expect(checkboxespage.option2).toBeExisting();
      /**  await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');**/
    });
     it('option 2 exists', async () => {
        await checkboxespage.open();

        
        
        
        await expect(checkboxespage.option2).toBeExisting();
      /**  await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');**/
    });
    it('Option 2 is selected', async () => {
        await checkboxespage.open();
        
        
        
        
        await checkboxespage.click(checkboxespage.option2)
        await browser.pause(2000);
        await expect(checkboxespage.option2).toBeChecked();
        
      /**  await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');**/
    });
    xit('Option 1 is selected', async () => {
        await checkboxespage.open();
        
        await browser.pause(2000);
        
        
        
        await checkboxespage.option1.isChecked
        
      /**  await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');**/
    });
    xit('Option 2 is selected', async () => {
        await dropdownpage.open();
        
        await browser.pause(5000);
        
        
        await dropdownpage.selection("Option 2")
        await dropdownpage.optionA.isSelected()
        
      /**  await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');**/
    });
});


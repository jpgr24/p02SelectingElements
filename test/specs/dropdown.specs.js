const dropdownpage=require('../pageobjects/dropdown.page');

describe('Existence heading and check 1', () => {
    it('Select exists', async () => {
        await dropdownpage.open();

        
        await expect(dropdownpage.select).toBeExisting();
      /**  await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');**/
    });
    it('Option 1 is selected', async () => {
        await dropdownpage.open();
        
        await browser.pause(5000);
        
        
        await dropdownpage.selection(dropdownpage,"Option 1")
        await dropdownpage.option1.isSelected()
        
      /**  await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');**/
    });
    it('Option 2 is selected', async () => {
        await dropdownpage.open();
        
        await browser.pause(5000);
        
        
        await dropdownpage.selection(dropdownpage,"Option 2")
        await dropdownpage.option2.isSelected()
        
      /**  await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');**/
    });
});



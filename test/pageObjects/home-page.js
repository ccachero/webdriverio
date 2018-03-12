class HomePage {
	get userDisplayName() { return browser.element('.userDisplayName'); }

	getDisplayName ()
    {
    	this.userDisplayName.waitForExist(100000);
    	return this.userDisplayName.getText();
    }
}

module.exports = { HomePage: HomePage };
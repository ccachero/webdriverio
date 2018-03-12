class LandingPage {

	get usernameInput()   { return browser.element('input[name=email]'); }
    get passwordInput()   { return browser.element('input[name=password]'); }
    get loginButton()     { return browser.element('//button[contains(., "Log in")]'); } 
    get signupFormLogo()  { return browser.element('.js-signupForm__logo'); }
    get userTypeSelector() { return browser.elements('.userJourneySelector__button'); }

    login (username, password) {

    	this.usernameInput.setValue(username);
    	this.passwordInput.setValue(password);
    	this.usernameInput.submitForm();
    }

    open (){
    	browser.url('/login');
    }

    landingPageHasLoaded(){
    	this.usernameInput.waitForVisible(10000);
    	this.passwordInput.waitForVisible(10000);
    	this.loginButton.waitForVisible(3000);
    	this.signupFormLogo.waitForVisible(10000);
    	this.userTypeSelector.waitForVisible(10000);
    	return true;
    }

}

module.exports = { LandingPage: LandingPage };
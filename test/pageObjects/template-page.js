const BookCoverPage = require('./book-cover-page.js').BookCoverPage;

class TemplatePage extends BookCoverPage{

	// Template elements
	get templateImage() { return browser.element('.marketplaceSingle__image'); }
	
	clickUseThisTemplateCTA(){
		super.useThisTemplateCTA.click();
	}

	templateHasLoaded(){
		this.templateImage.waitForVisible(10000);
		return true;
	}
}

module.exports = { TemplatePage: TemplatePage };
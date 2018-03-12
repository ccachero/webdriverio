class BookCoverPage{
	// Book Cover Page elements
	get bannerHeading() { return browser.element('.marketplaceHeader__bannerHeading'); }
	get headerLogo() { return browser.elements('.marketplaceHeader__logoGraphic'); }
	get footerLogo() { return browser.element('.footer__logo'); }
	get coverItem() { return browser.elements('.marketplace__gridItem--mediaCard'); }
	get searchBar() { return browser.element('.marketplaceSearchBox .comboBox')}

	// Page Elements
	get lastPageNumber() { return browser.element('.marketplacePagination .marketplacePagination__link:nth-child(6)'); }
	get activePageNumber() { return browser.element('.marketplacePagination__item--active'); }

	// Template Elements
	get currentCoverCategory() { return browser.element('.marketplaceCategoryList__category--current.marketplaceCategoryList__category--dashed'); }
	get useThisTemplateCTA() { return browser.element('.marketplaceSingle__designButton=Use this template')}

	open (){

		browser.url('templates/book-covers/');
	}

	getRandomNumber(upperLimit){
		return (Math.floor(Math.random() * Math.floor(upperLimit) + 1));
	}
	// Given
	getActivePageNumber(){
		return this.activePageNumber.getText();
	}

	getLastPageNumber(){
		return this.lastPageNumber.getText();
	}

	getSpecificPageNumber(pageNumber){
		return browser.element('.marketplacePagination__link='+pageNumber);
	}

	getRandomCover(randomNumber){
		return browser.element('.marketplace__gridItem--mediaCard:nth-child('+randomNumber+')');
	}

	getCategory(){
		this.useThisTemplateCTA.waitForVisible(10000);
		return this.currentCoverCategory.getText();
	}

	// When
	navigateToRandomPage(){
		var activePageNumber = parseInt(this.getActivePageNumber());
		// var randomPageNumber = this.getRandomNumber(this.getLastPageNumber());
		var randomPageNumber = 1;
		while(activePageNumber != randomPageNumber)
			{
				if((activePageNumber + 1) == randomPageNumber)
				{
				this.getSpecificPageNumber(activePageNumber + 1).click();
				activePageNumber++;
				}
				else{
				this.getSpecificPageNumber(activePageNumber + 2).click();
				activePageNumber += 2;
				}
			}
	}

	clickRandomBookCover(){
		var randomCover = this.getRandomNumber(this.coverItem.elements().value.length)
		this.getRandomCover(randomCover).click();

	}

	// Then
	bookCoverPageHasLoaded(){
		this.bannerHeading.waitForVisible(10000);
		this.searchBar.waitForVisible(10000);
		this.headerLogo.waitForVisible(10000);
		this.footerLogo.waitForVisible(10000);
		return true;
	}

	templateHasLoaded(){
		this.templateImage.waitForVisible(10000);
		return true;
	}

}

module.exports = { BookCoverPage: BookCoverPage };
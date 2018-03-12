const BookCoverPage = require('../pageObjects/book-cover-page.js').BookCoverPage;
const TemplatePage = require('../pageObjects/template-page.js').TemplatePage;
const LandingPage = require('../pageObjects/landing-page.js').LandingPage;
var bookCoverPage = new BookCoverPage();
var templatePage = new TemplatePage();
var landingPage = new LandingPage();

describe('Book Cover Template Availability Test ', function () {
  beforeAll(function (){
    console.log("Start");
  });
  afterAll(function (){
    console.log("End");
  });
  it('When User Navigates to Book Cover Page', function () {
  	bookCoverPage.open();
  	expect(bookCoverPage.bookCoverPageHasLoaded()).toBe(true);
  })
  it('And User chooses a page to open at random', function (){
   	bookCoverPage.navigateToRandomPage();
   	expect(bookCoverPage.bookCoverPageHasLoaded()).toBe(true);
  })
  it('And User opens a random template', function (){
  	bookCoverPage.clickRandomBookCover();
  	expect(templatePage.templateHasLoaded()).toBe(true);
  })
  it('Then the subcategory should be displayed successfully', function (){
  	console.log(bookCoverPage.getCategory());
  })
  it('And User should be redirected to homepage when clicking Use this template', function (){
  	templatePage.clickUseThisTemplateCTA();
  	expect(landingPage.landingPageHasLoaded()).toBe(true);
  })
})

let expect = require('chai').expect
const {Builder, By, promise, until} = require('selenium-webdriver');


describe('https://the-internet.herokuapp.com/', function() {
    var driver;
    this.timeout(60000);

    beforeEach(async function(){
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterEach(async function() {
        await driver.quit();
    });

    it('should have a h1 title that says \'Welcome to the Internet\'', async function() {
        await driver.get('https://the-internet.herokuapp.com/');
        let title = await driver.findElement(By.css('#content h1')).getText();
        
        expect(title).to.equal('Welcome to the Internet');
    });
});

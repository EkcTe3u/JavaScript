const { browser } = require('protractor')

const expect = require('chai').expect
const EC = protractor.ExpectedConditions

describe('First suit', function (){
    it('first test', async function(){

        const searchInputLogin = '#app-header > div.app-header__right-col > div.account-widget > div > div.login-widget__links > a.login-widget__registration-link'
        const searchInput = $(searchInputLogin)
        const searchButtonSelector = '#app-header > div.app-header__right-col > div.account-widget > div > div.login-widget__links > a.login-widget__registration-link'
        const searchButton = $(searchButtonSelector)

        const footerBody = 'body > div.index-container.m-account-promo-register-container > div.account-promo-register__footer'
        const footerInput = $(footerBody)
        await browser.get('https://baltbet.ru/')

        await browser.wait(EC.visibilityOf(searchInput), 5000, 'Search input should be visible')
        await browser.wait(EC.visibilityOf(searchButton), 5000, 'Search button should be visible')
        
        await searchButton.click()
        await browser.wait(EC.visibilityOf(footerInput), 10000, 'Search button should be visible')
        const footerBodyValue = await footerInput.getText()

        expect(footerBodyValue.toLowerCase()).to.include('балтбет')

        await browser.sleep(10 * 1000)
    })
}) 
import {LoginPage} from '../pages/login_page'
let loginPage = new LoginPage()

it('Amazon test', ()=>{
    cy.visit('https://www.amazon.in/')

    cy.wait(10000)
    cy.getCookies().should('not.be.empty')
    cy.clearCookies()
    cy.getCookies().should('be.empty')
    
    cy.get('#nav-global-location-popover-link').click()
    
    cy.wait(10000)
    cy.get('[class="a-button-input"]').click({ multiple: true ,force: true})
    loginPage.enterUsername('0774401632')
    loginPage.continueToPassword()
    loginPage.enterPassword('SomePassword123!')
    loginPage.signInSubmit()

})


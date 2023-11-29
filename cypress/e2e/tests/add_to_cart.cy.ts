import {LoginPage} from '../pages/login_page'
let loginPage = new LoginPage()

it('login', ()=>{
    cy.visit('https://www.amazon.in/')
    loginPage.signInAction()
    loginPage.enterUsername('0774401632')
    loginPage.continueToPassword()
    loginPage.enterPassword('SomePassword123!')
    loginPage.signInSubmit()

    cy.get('#twotabsearchtextbox').type('Perfumes{enter}')
    cy.get('#a-autoid-0-announce').click()
    cy.get('#s-result-sort-select_2').click()
    cy.get('[data-asin="B0017QK4C0"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus')
    .click()

    cy.visit('https://www.amazon.in/Bond-No-Scent-Peace-EDP/dp/B0017QK4C0/ref=sr_1_1?crid=2J5KS5KOQRMRL&keywords=Perfumes&qid=1700823990&sprefix=pe%2Caps%2C443&sr=8-1')
    cy.get('#add-to-cart-button').click()
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click()
    cy.get('.a-truncate-cut')
    .should(
        "have.text",
        "Bond No. 9 The Scent of Peace EDP - 3.3 oz"
      );
    


    
    

    
    
})
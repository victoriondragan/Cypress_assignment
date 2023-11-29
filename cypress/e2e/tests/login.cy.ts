import {LoginPage} from '../pages/login_page'

let loginPage = new LoginPage()

describe ('All Login tests', ()=>{

    beforeEach(function(){
        cy.visit('https://www.amazon.in/')
        loginPage.signInAction()

    })

    it('login test _ correct credentials', ()=>{
        cy.log('login test _ correct credentials')
        loginPage.enterUsername('0774401632')
        loginPage.continueToPassword()
        cy.get('#auth-error-message-box > .a-box-inner').should('not.exist')
        loginPage.enterPassword('SomePassword123!')      
        loginPage.signInSubmit()
        cy.get('#auth-error-message-box > .a-box-inner').should('not.exist')
    })
    
    it('login test _ wrong username', ()=>{
        cy.log('login test _ wrong username')
        loginPage.enterUsername('0774401633')
        loginPage.continueToPassword()
        cy.get('#auth-error-message-box > .a-box-inner').should('not.exist')
        loginPage.enterPassword('SomePassword123!')
        loginPage.signInSubmit()
        cy.get('#auth-error-message-box > .a-box-inner').should('not.exist')
        
        
    })
    
    it('login test _ wrong password', ()=>{
        cy.log('login test _ wrong password')
        loginPage.enterUsername('0774401632')
        loginPage.continueToPassword()
        cy.get('#auth-error-message-box > .a-box-inner').should('not.exist')
        loginPage.enterPassword('SomePassword123!2')
        loginPage.signInSubmit()
        cy.get('#auth-error-message-box > .a-box-inner').should('not.exist')
        
    })


})




import {LoginPage} from '../pages/login_page'
let loginPage = new LoginPage()

import { SearchPage } from '../pages/searchbycateg'
let searchPage = new SearchPage()

it('print prod discounts', ()=>{
    cy.visit('https://www.amazon.in/')
    loginPage.signInAction()
    loginPage.enterUsername('0774401632')
    loginPage.continueToPassword()
    loginPage.enterPassword('SomePassword123!')
    loginPage.signInSubmit()

    
    searchPage.typeInSearchBar("Mobiles")
    searchPage.enterSearchBar()
    searchPage.selectRating(3)
    searchPage.minimumPrice('9000')
    searchPage.maximumPrice('11500')
    searchPage.submitPrice()
    cy.wait(10000)
    searchPage.selectDiscount(60)
    cy.get('.a-size-base:contains(60% Off or more)').click({force: true})
    //cy.wait(10000)
    
       
    let productNames: string[] = []
    
    
      
      // cy.get('.sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1)')
      // .then(($text)=>{
      //   const txt = $text.text()
      //   cy.log(txt + '/////////////////')        
      // })


        
      




      })

      
























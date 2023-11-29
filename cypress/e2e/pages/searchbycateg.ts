export class SearchPage{
    searchBar = '#twotabsearchtextbox'
    searchBarEnter = '#nav-search-submit-button'
    oneStarRating = '.a-star-medium-1'
    twoStarRating = '.a-star-medium-2'
    threeStarRating = '.a-star-medium-3'
    fourStarRating = '.a-star-medium-4'

    lowPrice = '#low-price'
    highPrice = '#high-price'
    priceSetup = 'form > .a-button > .a-button-inner > .a-button-input'
    
    ten = '.a-size-base:contains(10% Off)'
    twentyfive = '.a-size-base:contains(25% Off)'
    thirtyfive = '.a-size-base:contains(35% Off)'
    fifty = '.a-size-base:contains(50% Off)'
    sixty = '.a-size-base:contains(60% Off)'
    seventy = '.a-size-base:contains(70% Off)'
    

    typeInSearchBar(itemType: string){
        cy.get(this.searchBar).type(itemType)
    }

    enterSearchBar(){
        cy.get(this.searchBarEnter).click()
    }

    selectRating(starNumber:number){
        if(starNumber == 1){
            cy.get(this.oneStarRating).click()
        } else if (starNumber == 2){
            cy.get(this.twoStarRating).click()
        } else if (starNumber == 3){
            cy.get(this.threeStarRating).click()
        } else if (starNumber == 4){
            cy.get(this.fourStarRating).click()
        }
    }

    minimumPrice(min: string){
        cy.get(this.lowPrice).type(min)
    }

    maximumPrice(max: string){
        cy.get(this.highPrice).type(max)
    }

    submitPrice(){
        cy.get(this.priceSetup).click()
    }


    selectDiscount(discount: number | string){
        if(discount == 10){
            cy.get(this.ten).click()
        } else if (discount == 25){
            cy.get(this.twentyfive).click()
        } else if (discount == 35){
            cy.get(this.thirtyfive).click()
        } else if (discount == 50){
            cy.get(this.fifty).click()
        } else if (discount == 60){
            cy.get(this.sixty).click()
        } else if (discount == 70){
            cy.get(this.seventy).click()
        }
    }


 









}
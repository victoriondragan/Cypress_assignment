export class LoginPage{

    signInModal = '#nav-link-accountList-nav-line-1'
    login_username = '#ap_email'
    continue_to_password = '.a-button-inner > #continue'
    login_password = '#ap_password'
    signin_submit_button = '#signInSubmit'

    signInAction(){
        cy.get(this.signInModal).click()
    }

    enterUsername(username: string){
        cy.get(this.login_username).type(username)
    }

    continueToPassword(){
        cy.get(this.continue_to_password).click()
    }

    enterPassword(password: string){
        cy.get(this.login_password).type(password)
    }

    signInSubmit(){
        cy.get(this.signin_submit_button).click()
    }


   

}
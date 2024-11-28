class LoginPage {

    constructor(){

    }

    //Locators
    getEmailField() {
        return cy.get('input[data-testid="email"]');
    }

    getPassField() {
        return cy.get('input[data-testid="senha"]');
    }

    getLoginBtn() {
        return cy.get('button[data-testid="entrar"]');
    }

    getSignInBtn() {
        return cy.get('input[data-testid="cadastrar"]');
    }

    // Actions
    enterEmail(email) {
        this.getEmailField().type(email);
    }

    enterPswd(pass) {
        this.getPassField().type(pass);
    }

    clickLogin() {
        this.getLoginBtn().click();
    }

    login(email, pass) {
        this.enterEmail(email);
        this.enterPswd(pass);
        this.clickLogin();
      }
}

export default LoginPage;
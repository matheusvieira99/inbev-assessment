class LoginPage {

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

    getSignUpBtn() {
        return cy.get('a[data-testid="cadastrar"]');
    }

    getAlert() {
        return cy.get('div[class="alert alert-secondary alert-dismissible"]');
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

    checkAlertText(text) {
        this.getAlert().contains(text);
    }

    clickOnSignUpBtn() {
        this.getSignUpBtn().click();
    }
}

export default LoginPage;
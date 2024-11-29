class SignUpPage {


    //Locators

    getNameField() {
        return cy.get('input[data-testid="nome"]');
    }

    getEmailField() {
        return cy.get('input[data-testid="email"]');
    }

    getPassField() {
        return cy.get('input[data-testid="password"]');
    }

    getAdminCheckbox() {
        return cy.get('input[data-testid="checkbox"]');
    }

    getSignUpBtn() {
        return cy.get('button[data-testid="cadastrar"]');
    }

    // Actions
    enterName(name) {
        this.getNameField().type(name);
    }
    enterEmail(email) {
        this.getEmailField().type(email);
    }

    enterPswd(pass) {
        this.getPassField().type(pass);
    }

    clickCheckBox() {
        this.getAdminCheckbox().click();
    }

    clickSignUp() {
        this.getSignUpBtn().click();
    }

    signUpAdmin(name, email, pass) {
        this.enterName(name);
        this.enterEmail(email);
        this.enterPswd(pass);
        this.clickCheckBox();
        this.clickSignUp();
    }

}

export default SignUpPage;
class HomePage {

    //Locators
    getUsersBtn() {
        return cy.get('a[data-testid="listarUsuarios"]');
    }

    // Actions
    clickOnUsersBtn() {
        this.getUsersBtn().click();
    }
}
class LoginAPI {

    constructor() {
        // getting api host from envinroment variable
        this.apiHost = Cypress.env('apiHost');
    }

    getAdminToken(email, password) {
        return cy.request({
          method: 'POST',
          url: `${this.apiHost}/login`,
          body: {
            email,
            password,
          },
        });
      }
}

export default LoginAPI;
class RegisterProdAPI {

    constructor() {
        // getting api host from envinroment variable
        this.apiHost = Cypress.env('apiHost');
    }

    getAuthToken() {
        return Cypress.env('authToken'); // access the token stored in Cypress env
      }

    registerProduct(nome, preco, descricao, quantidade) {
        const token = this.getAuthToken();
        return cy.request({
          method: 'POST',
          url: `${this.apiHost}/produtos`,
          // allowing negative tests
          failOnStatusCode: false,
          body: {
            nome,
            preco,
            descricao,
            quantidade
          },
          headers: {
            Authorization: `${token}` // Attach the token
          }
        });
        
      }


}

export default RegisterProdAPI;
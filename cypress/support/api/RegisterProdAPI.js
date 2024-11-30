import getAuthToken from '../utils/utilities';

class RegisterProdAPI {
    
    constructor() {
        // getting api host from envinroment variable
        this.apiHost = Cypress.env('apiHost');
    }
    
    registerProduct(nome, preco, descricao, quantidade) {

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
            Authorization: `${getAuthToken()}` // Attach the token
          }
        });
        
      }

      registerProductInvalidJWT(nome, preco, descricao, quantidade, jwt) {
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
            Authorization: `${jwt}`
          }
        });
        
      }

    deleteProdById(id) {
        return cy.request({
            method: 'DELETE',
            url: `${this.apiHost}/produtos/${id}`,
            headers: {
                Authorization: `${getAuthToken()}`
              }
        });
    }

    getProductByName(name) {
        return cy.request({
            method: 'GET',
            url: `${this.apiHost}/produtos`,
            qs: {
                "nome": name
            }
        })
    }


}

export default RegisterProdAPI;
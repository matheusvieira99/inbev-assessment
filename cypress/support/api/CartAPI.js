import getAuthToken from '../utils/utilities';

class CartAPI {
    constructor() {
        // getting api host from envinroment variable
        this.apiHost = Cypress.env('apiHost');
    }

    getCarts(id, totalPrice, totalAmount, UserID) {
        return cy.request({
            method: 'GET',
            url: `${this.apiHost}/carrinhos`,
            qs: {
                "_id": id,
                "precoTotal": totalPrice,
                "quantidadeTotal": totalAmount,
                "idUsuario": UserID
            }
          });
    }

    registerCartWithValidToken(products) {
        const requestBody = {
            produtos: products,
        };

        return cy.request({
            method: 'POST',
            url: `${this.apiHost}/carrinhos`,
            body: requestBody,
            headers: {
                'Content-Type': 'application/json',
            },
            headers: {
                Authorization: `${getAuthToken()}` // Attach the token
              }
        });
    }

    finishOrder() {
        return cy.request({
            method: 'DELETE',
            url: `${this.apiHost}/carrinhos/concluir-compra`,
            headers: {
                Authorization: `${getAuthToken()}` // Attach the token
              }
        });
    }

    cancelOrder() {
        return cy.request({
            method: 'DELETE',
            url: `${this.apiHost}/carrinhos/cancelar-compra`,
            headers: {
                Authorization: `${getAuthToken()}` // Attach the token
              }
        });
    }
}
class UserAPI {
    constructor() {
        // getting api host from envinroment variable
        this.apiHost = Cypress.env('apiHost');
    }

    registerUser(name, email, password, admin) {
        return cy.request({
          method: 'POST',
          url: `${this.apiHost}/usuarios`,
          body: {
            name,
            email,
            password,
            admin
          },
        });
      }

    getUser(id, name, email, pass, admin) {
        return cy.request({
            method: 'GET',
            url: `${this.apiHost}/usuarios`,
            qs: {
                "_id": id,
                "nome": name,
                "email": email,
                "password": pass,
                "administrador": admin
            }
          });
    }

    deleteById(id) {
        return cy.request({
            method: 'DELETE',
            url: `${this.apiHost}/usuarios`,
            qs: {
                "_id": id
            }
        });
    }

    updateUserById(id) {
        return cy.request({
            method: 'PUT',
            url: `${this.apiHost}/usuarios`,
            qs: {
                "_id": id
            }
        });
    }



}

export default UserAPI;
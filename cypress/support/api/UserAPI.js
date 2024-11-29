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
            "nome": name,
            "email": email,
            "password": password,
            "administrador": admin
          },
        });
      }

    getUserByEmail(email) {
        return cy.request({
            method: 'GET',
            url: `${this.apiHost}/usuarios`,
            qs: {
                "email": email,
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
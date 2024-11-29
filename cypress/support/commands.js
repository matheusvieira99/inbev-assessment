import LoginAPI from "../support/api/LoginApi";

const LoginApiObj = new LoginAPI();
let token;

Cypress.Commands.add('generateAdminToken', (email, pass) => {
    LoginApiObj.getAdminToken(email, pass).then((response) => {
        expect(response).property('status').to.equal(200); // verify the response code
        expect(response.body).property('message').to.not.be.oneOf([null, ""]);
        expect(response.body).property('authorization').to.not.be.oneOf([null, ""]); // ensure token is not null or empty
        expect(response.body).property('message').to.equal('Login realizado com sucesso');
        expect(response.body).property('authorization').to.include('Bearer'); // ensure that the token returned is a bearer token
        token = response.body.authorization; // storing token in a variable
        Cypress.env('authToken', token); // storing the token in Cypress environment variables
    });
  });

Cypress.Commands.add('generateUniqueName', (prefix) => {
    return `${prefix}_${Date.now()}`;
  });
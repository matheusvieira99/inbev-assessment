import SignUpPage from '../../support/page_objects/SignUpPage';
import LoginPage from '../../support/page_objects/LoginPage';
import data from '../../fixtures/data.json';
import { generateUniqueName } from '../../support/utils/utilities';
import { generateUniqueEmail } from '../../support/utils/utilities';
import UserAPI from "../../support/api/UserAPI";

describe('test suite to validate sign up functionality', () => {

    let SignUpObj;
    let LoginPageObj;
    let userObj;
    // Creating page objects before execution of test suite
    before(() => {
        SignUpObj = new SignUpPage();
        LoginPageObj = new LoginPage();
        userObj = new UserAPI();

        // login as precondition
        userObj.getUserByEmail(data.validEmail).then((res) => {
            const qnt = res.body.quantidade;
            if (qnt == 0) {
                userObj.registerUser('Matheus Inbev', data.validEmail, data.validPass, 'true');
                expect(response.body).property('message').to.equal('Cadastro realizado com sucesso');
                cy.log('User created');
            }
        })
    });

    // block to be executed before each test case
    beforeEach(() => {
        cy.fixture('data').then((data) => {
            data = data;
        });
        cy.visit('/login');
    });

    it('should sign up as admin', () => {
        LoginPageObj.clickOnSignUpBtn();
        cy.url().should('include', 'cadastrarusuarios');
        SignUpObj.signUpAdmin(generateUniqueName('inbev_test'), generateUniqueEmail('inbevTest'), data.validPass);
        cy.url().should('include', 'admin/home');
    });

})
import LoginPage from '../../support/page_objects/LoginPage';
import data from '../../fixtures/data.json';
import UserAPI from "../../support/api/UserAPI";

describe('Test suite to validate login', () => {
    let LoginPageObj;
    let userObj;


    // Creating page object before executing of test suite
    before(() => {
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
    
    it('should not login admin account with invalid credentials', () => {
        LoginPageObj.login(data.invalidEmail, data.validPass);
        cy.url().should('not.include', 'admin/home'); // verifying navigation
        LoginPageObj.checkAlertText('Email e/ou senha inválidos');
    });

    it('should login admin account with valid credentials', () => {
        LoginPageObj.login(data.validEmail, data.validPass);
        // verifying navigation
        cy.url().should('include', 'admin/home');
    });

  })
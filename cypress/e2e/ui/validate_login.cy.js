import LoginPage from '../../support/page_objects/LoginPage';
import data from '../../fixtures/data.json';

describe('Test suite to validate login', () => {
    let LoginPageObj;


    // Creating page object before executing of test suite
    before(() => {
        LoginPageObj = new LoginPage();
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
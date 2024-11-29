import SignUpPage from '../../support/page_objects/SignUpPage';
import LoginPage from '../../support/page_objects/LoginPage';
import data from '../../fixtures/data.json';
import { generateUniqueName } from '../../support/utils/utilities';
import { generateUniqueEmail } from '../../support/utils/utilities';

describe('test suite to validate sign up functionality', () => {

    let SignUpObj;
    let LoginPageObj;
    // Creating page objects before execution of test suite
    before(() => {
        SignUpObj = new SignUpPage();
        LoginPageObj = new LoginPage();
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
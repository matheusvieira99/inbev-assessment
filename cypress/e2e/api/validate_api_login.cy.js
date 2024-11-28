import LoginAPI from "../../support/api/LoginApi";
import data from '../../fixtures/data.json';

describe('Test suite to register new product', () => {
    let LoginApiObj;

    // Creating page object before executing of test suite
    before(() => {
        LoginApiObj = new LoginAPI();
    });

    beforeEach(() => {
        cy.fixture('data').then((data) => {
            data = data;
        });
    });

    it('should generated admin token', () => {
        LoginApiObj.getAdminToken(data.validEmail, data.validPass).then((response) => {
            expect(response.status).to.eq(200);
        });

    });
});
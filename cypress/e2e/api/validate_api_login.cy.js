import data from '../../fixtures/data.json';
import RegisterProdAPI from "../../support/api/RegisterProdAPI";
import generateUniqueName from '../../support/utils/utilities';

describe('Test suite to register new product as an admin', () => {
    let registerProdObj;
    let idProduct;

    // Creating page object before executing of test suite
    before(() => {
        registerProdObj = new RegisterProdAPI();
        // login as precondition
        cy.generateAdminToken(data.validEmail, data.validPass);
    });

    beforeEach(() => {
        cy.fixture('data').then((data) => {
            data = data;
        });
    });

    // it('should generate admin token', () => {

    // });

    it('should not create existing product with valid token', () => {
        registerProdObj.registerProduct(data.products.mouseLogitech.name, data.products.mouseLogitech.price, data.products.mouseLogitech.description, data.products.mouseLogitech.amount).then((response) => {
            expect(response).property('status').to.equal(400); // bad request expected
            // expect(response.body).property('_id').to.not.be.oneOf([null, ""]); // ensure id is not null or empty
            expect(response.body).property('message').to.equal('Já existe produto com esse nome');
            // idProduct = response.body._id;
        });
    });

    it('should not create product with expired token', () => {
        registerProdObj.registerProductInvalidJWT(generateUniqueName('Mouse'), data.products.mouseLogitech.price, data.products.mouseLogitech.description, data.products.mouseLogitech.amount, data.expiredToken).then((response) => {
            expect(response).property('status').to.equal(401); // unauthorized
            expect(response.body).property('message').to.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais');
        });
    });
});
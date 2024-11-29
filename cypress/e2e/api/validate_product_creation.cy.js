import data from '../../fixtures/data.json';
import RegisterProdAPI from "../../support/api/RegisterProdAPI";
import UserAPI from "../../support/api/UserAPI";
import { generateUniqueName } from '../../support/utils/utilities';

describe('Test suite to register new product as an admin', () => {
    let registerProdObj;
    let idProduct;
    let userObj;

    // Creating page object before execution of test suite
    before(() => {
        registerProdObj = new RegisterProdAPI();
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

        cy.generateAdminToken(data.validEmail, data.validPass);
    });

    // after(() => {
    //     // delete user after test suite


    // });

    beforeEach(() => {
        cy.fixture('data').then((data) => {
            data = data;
        });
    });


    it('should not create existing product with valid token', () => {
        registerProdObj.registerProduct(data.products.mouseLogitech.name, data.products.mouseLogitech.price, data.products.mouseLogitech.description, data.products.mouseLogitech.amount).then((response) => {
            expect(response).property('status').to.equal(400); // bad request expected
            expect(response.body).property('message').to.equal('Já existe produto com esse nome');
        });
    });

    it('should not create product with expired token', () => {
        registerProdObj.registerProductInvalidJWT(generateUniqueName('Mouse'), data.products.mouseLogitech.price, data.products.mouseLogitech.description, data.products.mouseLogitech.amount, data.expiredToken).then((response) => {
            expect(response).property('status').to.equal(401); // unauthorized
            expect(response.body).property('message').to.equal('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais');
        });
    });

    it('should create non-existing product with valid token', () => {
        registerProdObj.registerProduct(generateUniqueName('Mouse'), data.products.mouseLogitech.price, data.products.mouseLogitech.description, data.products.mouseLogitech.amount).then((response) => {
            expect(response).property('status').to.equal(201); // created expected
            expect(response.body).property('_id').to.not.be.oneOf([null, ""]); // ensure id is not null or empty
            expect(response.body).property('message').to.equal('Cadastro realizado com sucesso');
            idProduct = response.body._id;
        });
    });

    it('should delete product by id', () => {
        registerProdObj.deleteProdById(idProduct).then((res) => {
            expect(res).property('status').to.equal(200); // ok
            expect(res.body).property('message').to.equal('Registro excluído com sucesso');
        });
    });
});
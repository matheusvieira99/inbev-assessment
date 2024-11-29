export const generateUniqueName = (prefix) => {
    return `${prefix}_${Date.now()}`;
};

export const generateUniqueEmail = (prefix) => {
    return `${prefix}_${Date.now()}_@yahoo.com`;
};

const getAuthToken = () => {
    return Cypress.env('authToken'); // access the token stored in Cypress env
};

export default getAuthToken;
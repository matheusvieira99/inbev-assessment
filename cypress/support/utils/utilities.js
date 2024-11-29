const generateUniqueName = (prefix) => {
    return `${prefix}_${Date.now()}`;
};

const getAuthToken = () => {
    return Cypress.env('authToken'); // access the token stored in Cypress env
};

export default getAuthToken;
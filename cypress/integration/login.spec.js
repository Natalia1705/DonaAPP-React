describe('Login testing', () => {
  before(() => {
    cy.request(
      'POST',
      'https://fast-shelf-59848.herokuapp.com/api/user/signup',

      {
        name: 'cypressTest',
        email: 'cypressTest@fakemail.com',
        password: 'Cypress123*',
      },
    );
  });
  beforeEach(() => {
    cy.visit('/login');
  });
  after(() => {
    cy.request(
      'DELETE',
      'https://fast-shelf-59848.herokuapp.com/api/user/testdelete',
    );
  });
  it('Login view loads correctly', () => {
    cy.contains('Iniciar sesión').should('be.visible');
    cy.get('header')
      .should('be.visible')
      .within(() => {
        cy.get("[data-cy='login-button']")
          .should('be.visible')
          .should('contain.text', 'Iniciar Sesión');
        cy.get("[data-cy='register-button']")
          .should('be.visible')
          .should('contain.text', 'Registrarse');
      });
    cy.get('Form')
      .should('be.visible')
      .within(() => {
        cy.get('input').should('have.length', 2);
      });
    cy.get("[data-cy='login-submmit-button']")
      .should('be.visible')
      .should('contain.text', 'Iniciar Sesión');
  });
  it('Login', () => {
    cy.get("[data-cy='login-email-input']").type('cypressTest@fakemail.com');
    cy.get("[data-cy='login-password-input']").type('Cypress123*');
    cy.get("[data-cy='login-submmit-button']").click();
    cy.url().should('include', '/campaigns');
  });
  it('Login with an unexistent email', () => {
    cy.get("[data-cy='login-email-input']").type('fakemailcyp@cypress.com');
    cy.get("[data-cy='login-password-input']").type('Cypress123*');
    cy.get("[data-cy='login-submmit-button']").click();
    cy.contains('Email o contraseña incorrectos');
  });
  it('Login with an incorrect password', () => {
    cy.get("[data-cy='login-email-input']").type('cypressTest@fakemail.com');
    cy.get("[data-cy='login-password-input']").type('ups123');
    cy.get("[data-cy='login-submmit-button']").click();
    cy.contains('Email o contraseña incorrectos');
  });
});

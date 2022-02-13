/* eslint-disable cypress/no-unnecessary-waiting */
describe('Login testing', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  after(() => {
    cy.get("[data-cy='menu-profile']").click();
    cy.wait(1000);
    cy.get("[data-cy='log-out-button']").click();
    // log out
  });
  it('Login view loads correctly', () => {
    cy.contains('Iniciar Sesión').should('be.visible');
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
  it('Login with an unexistent email', () => {
    cy.get("[data-cy='login-email-input']").type('fakemailcyp@cypress.com');
    cy.get("[data-cy='login-password-input']").type('Cypress123*');
    cy.get("[data-cy='login-submmit-button']").click();
    cy.contains('The user does not exists');
  });
  it('Login with an incorrect password', () => {
    cy.get("[data-cy='login-email-input']").type('ps.fabc.011772@gmail.com');
    cy.get("[data-cy='login-password-input']").type('ups123');
    cy.get("[data-cy='login-submmit-button']").click();
    cy.contains('The email or password are incorrect');
  });
  it('Login', () => {
    cy.get("[data-cy='login-email-input']").type('ps.fabc.011772@gmail.com');
    cy.get("[data-cy='login-password-input']").type('Contra123*');
    cy.get("[data-cy='login-submmit-button']").click();
    cy.url().should('include', '/campaigns');
  });
});
